"use client"
import { useState } from 'react'
import { useForm } from "react-hook-form"
import React from 'react'

function page() {
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting },
    } = useForm();

    const delay = (d) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve()
            }, d * 1000);
        })
    }
    const onSubmit = async (data) => {
        await delay(2) // simulating network delay
        let r = await fetch("http://localhost:3000", {
            method: "POST", headers: {
                "Content-Type": "application/json",
            }, body: JSON.stringify(data)
        })

        let res = await r.text()
        console.log(data, res)
        // if(data.username !== "shubham"){
        //   setError("myform", {message: "Your form is not in good order because credentials are invalid"})
        // }
        // if(data.username === "rohan"){
        //   setError("blocked", {message: "Sorry this user is blocked"})
        // }
    }

    return (
        <div className="w-100% bg-sky-400 flex justify-center ">
            <div className=" block ">
                <div className="box w-[350px] h-[500px]  mt-32 mb-32 rounded-3xl text-center bg-white">
                    <h1 className="font-bold text-2xl pt-4 pb-6 block ">Breed Sense </h1>
                    {isSubmitting && <div>Loading...</div>}
                    <div className="container">
                        <form action="" onSubmit={handleSubmit(onSubmit)}>

                            <input className="border-2 border-white m-2 w-56 rounded-[5px] pl-3 p-1 text-[16px] bg-gray-400 text-white  hover:text-black " placeholder='Email'  {...register("email", { minLength: { value: 7, message: "Min length of password is 7" }, })} type="email" />
                            {errors.password && <div className='red'>{errors.password.message}</div>}
                            <br /> <input className="border-2 border-white m-2 w-56 rounded-[5px] pl-3 p-1 text-[16px] bg-gray-400 text-white  hover:text-black " placeholder='Password'  {...register("password", { minLength: { value: 7, message: "Min length of password is 7" }, })} type="password" />
                            {errors.password && <div className='red'>{errors.password.message}</div>}
                            <br />
                            <input className="border-2 border-white m-2 w-56 rounded-[5px] pl-3 p-1 text-[16px] bg-gray-400 text-white  hover:text-black " disabled={isSubmitting} type="submit" value="Login" />
                            {errors.myform && <div className='red'>{errors.myform.message}</div>}
                            {errors.blocked && <div className='red'>{errors.blocked.message}</div>}
                        </form>
                        <div className="mt-6">
                            <div className="or">
                            <hr />
                            <h1> OR </h1>
                            <hr />
                            </div>

                            <p>Already have an account?</p>
                            <button
                                onClick={() => signIn("github")}
                                className="bg-gray-700 text-white px-4 py-2 rounded-lg m-2 hover:bg-black"
                            >
                                Sign in with GitHub
                            </button>
                            <button
                                onClick={() => signIn("google")}
                                className="bg-blue-500 text-white px-4 py-2 rounded-lg m-2 hover:bg-blue-700"
                            >
                                Sign in with Google
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
