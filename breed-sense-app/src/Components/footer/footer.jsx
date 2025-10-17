"use client"
import { setDragLock } from 'framer-motion'
import React from 'react'

function footer() {
  return (
    <div >
      <br /><br /><br /><br /><br /><br /><br /><br /><br />
      <div className="div grid grid-cols-1 p-4 w-screen bg-sky-500  text-white justify-center  content-center text-left md:grid-cols-3">
        <div className="left pb-6 pl-2  ">
          <h1 className="font-bold text-2xl pb-2 text-black">Breedify</h1>
          <div className="text ">
            An AI tool for cattle & buffalo breed<br /> recognition - aligned with Digital India
            <br />
            <div className="pt-2"><span className=" text-gray-500 ">Created By &nbsp; </span><span
              className="text-blue-700 ">Raj Ritik Varma</span></div>
          </div>
        </div>
        <div className="center pb-6 pl-2 ">
          <h1 className="font-bold text-2xl pb-2 text-black">Quick Links</h1>
          <div className="">
            <a className="block" href="">Home</a>
            <a className="block" href="">How To Work </a>
            <a className="block" href="">Features</a>
            <a href="">Contact us</a>
          </div>
        </div>
        <div className="right pb-6 pl-2 ">
          <h1 className="font-bold text-2xl pb-2 text-black">Get in Touch</h1>
          <div className="text">
            We are happy to talk to you. <br /> You can contact us anytime
            <br /> <span className="font-semibold">Phone&nbsp; : &nbsp;</span> +91 9236134041
            <br /><span className="font-semibold">Email &nbsp;: &nbsp;</span> rajritik.4041@gmail.com
          </div>
        </div>
      </div>
    </div>
  )
}

export default footer


/* 
  <div className="w-screen">
                    
        <div className="w-screen bg-blue-500 text-white">
           <hr />
            <div className="text-center text-[10px]  p-5 m-2">
                ©2025 Breedify. All rights reserved.
            </div>
    </div>
*/