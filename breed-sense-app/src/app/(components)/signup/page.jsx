"use client"
import React from 'react'
import { useState } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useForm } from "react-hook-form"

function Page() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  const { data: session } = useSession();

  const delay = (d) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, d * 1000);
    });
  };

  const onSubmit = async (data) => {
    // await delay(2); // simulate delay
    let r = await fetch("http://localhost:3000", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let res = await r.text();
    console.log(data, res);
  };

  //  Check login session properly inside return
  if (session) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-amber-200">
        <h1 className="text-3xl font-bold mb-6">Welcome, {session.user.email}</h1>
        <button
          onClick={() => signOut()}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700"
        >
          Sign out
        </button>
      </div>
    );
  }

  return (
    <div className="w-full h-screen bg-amber-200 flex justify-center">
      <div className="w-[350px] h-[550px] mt-20 rounded-3xl text-center bg-amber-600 shadow-lg">
        <h1 className="font-bold text-2xl pt-4 pb-6">Breed Sense</h1>

        {isSubmitting && <div>Loading...</div>}

        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="border-2 border-white m-2 w-56 rounded-[5px] pl-3 p-1 text-[16px] bg-gray-400 text-white hover:text-black"
            placeholder="Name"
            {...register("username", {
              required: { value: true, message: "This field is required" },
              minLength: { value: 3, message: "Min length is 3" },
              maxLength: { value: 8, message: "Max length is 8" },
            })}
            type="text"
          />
          {errors.username && <div className="text-red-700">{errors.username.message}</div>}

          <input
            className="border-2 border-white m-2 w-56 rounded-[5px] pl-3 p-1 text-[16px] bg-gray-400 text-white hover:text-black"
            placeholder="Phone number"
            {...register("phone", {
              required: { value: true, message: "Phone number is required" },
              minLength: { value: 10, message: "Min length is 10 digits" },
            })}
            type="number"
          />
          {errors.phone && <div className="text-red-700">{errors.phone.message}</div>}

          <input
            className="border-2 border-white m-2 w-56 rounded-[5px] pl-3 p-1 text-[16px] bg-gray-400 text-white hover:text-black"
            placeholder="Email"
            {...register("email", {
              required: { value: true, message: "Email is required" },
            })}
            type="email"
          />
          {errors.email && <div className="text-red-700">{errors.email.message}</div>}

          <input
            className="border-2 border-white m-2 w-56 rounded-[5px] pl-3 p-1 text-[16px] bg-gray-400 text-white hover:text-black"
            placeholder="Password"
            {...register("password", {
              required: { value: true, message: "Password is required" },
              minLength: { value: 7, message: "Min length is 7" },
            })}
            type="password"
          />
          {errors.password && <div className="text-red-700">{errors.password.message}</div>}

          <input
            className="border-2 border-white m-2 w-56 rounded-[5px] pl-3 p-1 text-[16px] bg-gray-400 text-white hover:text-black"
            placeholder="Confirm Password"
            {...register("confirmPassword", {
              required: { value: true, message: "Confirm your password" },
            })}
            type="password"
          />
          {errors.confirmPassword && <div className="text-red-700">{errors.confirmPassword.message}</div>}

          <input
            className="border-2 border-white m-2 w-56 rounded-[5px] pl-3 p-1 text-[16px] bg-gray-500 text-white hover:text-black cursor-pointer"
            disabled={isSubmitting}
            type="submit"
            value="Sign Up"
          />
        </form>

        <div className="mt-6">
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
  );
}

export default Page;
