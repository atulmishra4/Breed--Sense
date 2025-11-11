import { connect } from "../../../../dbConfig/dbConfig.js";
import User from "../../../../models/userModel.js";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";


export async function POST(request) {
    await connect();
    try {
        const reqBody = await request.json();
        const { email, password } = reqBody;
        console.log(reqBody);
        console.log("I am hear 1")
        const user = await User.findOne({ email });
        console.log("I am hear 2")
        if (!user) {
            console.log("I am hear 3")
            return NextResponse.json({ error: "User does not exist" }, { status: 400 });
        }

        // check password
        console.log("I am hear 4")
        const validPassword = await bcryptjs.compare(password, user.password);
        console.log("I am hear 5")
        if (!validPassword) {
            console.log("I am hear 6")
            return NextResponse.json({ error: "Invalid Password" }, { status: 400 });
        }

        // create token data
        console.log("I am hear 7")
        const tokenData = {
            id: user._id,
            username: user.username,
            email: user.email,
        };
        console.log("I am hear 8")
        // const token = jwt.sign(tokenData, process.env.TOKEN_SECRET, { expiresIn: "1d" });
        const token = jwt.sign(tokenData, process.env.TOKEN_SECRET || "fallbackSecret", { expiresIn: "1d" }
        );

        const response = NextResponse.json({
            message: "Login Successful",
            success: true,
        });

        // Set cookie
        response.cookies.set("token", token, {
            httpOnly: true,
        });

        return response;
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

