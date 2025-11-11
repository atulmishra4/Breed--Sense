import { connect } from "../../../../dbConfig/dbConfig.js";
import User from "../../../../models/userModel.js";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";


export async function POST(request) {
    await connect();
    try {
        const reqBody = await request.json();
        const { username, number , email, password } = reqBody;

        console.log(reqBody);

        // Check if user already exists
        const user = await User.findOne({ email });
        console.log("Hello I am hear1  ")
        if (user) {
            console.log("Hello I am hear2  ")
            return NextResponse.json({ error: "User already exists" }, { status: 400 });
            console.log("Hello I am hear2.0");
        }
        // Hash password
        const salt = await bcryptjs.genSalt(10);
        console.log("Hello I am hear3  ")
        const hashedPassword = await bcryptjs.hash(password, salt);
        console.log("Hello I am hear4  ")

        // Create new user
        const newUser = new User({
            username,
            email,
            number,
            password: hashedPassword,
        });

        const savedUser = await newUser.save();
        console.log(savedUser);

        return NextResponse.json({
            message: "User created successfully",
            success: true,
            savedUser,
        });

    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
    }
}
