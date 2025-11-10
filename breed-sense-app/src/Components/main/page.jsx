"use Client"
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { motion } from 'framer-motion'
import { menu, X } from 'lucide-react'
import Link from 'next/link'
import { a, div, label, link } from 'framer-motion/client'
function main() {
    return (
        <div>
            <div className="container ">
                <main>
                    <div className="welcome text-center content-center min-h-96 bg-purple-500 w-screen gap-4 ">
                        <h1 className="text-white font-bold text-4xl  m-5 md:text-5xl  ">Welcome to Breed-Sense</h1>
                        <h3 className="text-white font-medium m-5  text-lg">Image-based Breed Recognition <br /> Cattle &
                            Buffaloes
                            Identification System</h3>
                        <div className="flex justify-center font-bold text-white" >
                            <div className="m-2 bg-purple-700  w-fit  rounded-md ">
                                <motion.button
                                    className="login-button2 p-3   hover:bg-purple-600 rounded-md  "
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Link href="/login">Try Demo</Link>
                                </motion.button>
                            </div>
                        </div>
                    </div>
                </main>
            </div>











            <div className="bg-purple-300">
                    
                <header className="text-center pt-8  font-bold text-[25px] ">
                    Learn how it works
                </header>
                <div
                    className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 text-center  justify-center grid-flow-row-dense">
                    <div
                        className="search shadow hover:shadow-lg  m-2 text-center justify-center pt-4 pl-4 pr-4 pb-2 sm:p-4  rounded-[20px]  bg-white">
                        <div className="image p-2">📷</div>
                        <h1 className="font-bold text-[20px] sm:text-4xl">1.Capture</h1>
                        <div className="text text-[10px] sm:text-xl ">Farmer snaps a photo </div>
                    </div>
                    <div
                        className="search shadow hover:shadow-lg  m-2 text-center justify-center pt-4 pl-4 pr-4 pb-2 sm:p-4 rounded-[20px]  bg-white">
                        <div className="image p-2">🔎</div>
                        <h1 className="font-bold sm:text-4xl text-[20px] ">2.Classify </h1>
                        <div className="text text-[10px] sm:text-xl md:text-normal">Lightweight AI on cloud device
                        </div>
                    </div>
                    <div
                        className="search shadow hover:shadow-lg m-2 text-center justify-center pt-4 pl-4 pr-4 pb-2 sm:p-4  rounded-[20px]  bg-white">
                        <div className="image p-2 ">📋</div>
                        <h1 className="font-bold text-[20px] sm:text-4xl">3.Report</h1>
                        <div className="text text-[10px] sm:text-xl md:font-normal "> Breed Info + tips </div>
                    </div>
                </div>
                <br />
            </div>

            <div className="features bg-purple-300  text-center">
                <h1 className="font-bold text-2xl ">Features & Benefits</h1>
                <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3 p-0.5 text-left  ">
                    <div
                        className="  shadow hover:shadow-lg bg-white   pr-2 pb-2 pl-2 pt-2 sm:pb-1 border-0 rounded-[5px]   boxes1">
                        <h1 className="font-bold ">Accurate breed recognition</h1>
                        <div className="text">
                            Uses color, body shape, horns and Facial cues to classify breeds.
                        </div>
                    </div>
                    <div
                        className=" shadow hover:shadow-lg  bg-white   pr-2 pb-2 pl-2 pt-2 sm:pb-1 border-0 rounded-[5px]   boxes2">
                        <h1 className="font-bold   ">Breed-specific guidance</h1>
                        <div className="text">Milk yeild estimates, feeding & disease susceptibility tips.</div>
                    </div>
                    <div className=" shadow hover:shadow-lg bg-white   pr-2 pb-2 pl-2 pt-2 sm:pb-1 border-0 rounded-[5px]   boxes3">
                        <h1 className="font-bold   ">Lightweight & offline-friendly</h1>
                        <div className="text">Works on low-end phones and caches results when offline.</div>
                    </div>
                    <div className=" shadow hover:shadow-lg bg-white  pr-2 pb-2 pl-2 pt-2  sm:pb-1 border-0 rounded-[5px]   boxes4">
                        <h1 className="font-bold   ">Data storage & reports</h1>
                        <div className="text">Cloud records for insurance claims and goverment schemes.</div>
                    </div>
                    <div className=" shadow hover:shadow-lg bg-white  pr-2 pb-2 pl-2 pt-2 sm:pb-1 border-0 rounded-[5px]   boxes5">
                        <h1 className="font-bold   ">Dynamic learning </h1>
                        <div className="text">Model retrins with farmer-submitted imaes to improve accuracy</div>
                    </div>
                    <div className=" shadow hover:shadow-lg bg-white  pr-2 pb-2 pl-2 pt-2 sm:pb-1 border-0 rounded-[5px]   boxes6">
                        <h1 className="font-bold   ">Farmer-friendly UI</h1>
                        <div className="text">Minimal text, big icons, local language support ready.</div>
                    </div>

                </div>
                <br />
            </div>




















            <div className="main p-2 bg-purple-300  ">
                <div className="heading text-center p-4 font-bold text-[24px]   ">
                    Testimoniols
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 text-center ">
                    <div className="John pl-6  pr-6 pb-8 bg-white m-3 rounded-[20px] ">
                        <h1 className="font-bold text-[20px] p-4 ">John Doe</h1>
                        <div className="text-black">This technology has revolutionzed our cattel farming business</div>
                    </div>
                    <div className="Jane pl-6  pr-6 pb-8 bg-white m-3 rounded-[20px] ">
                        <h1 className="font-bold text-[20px] p-4 ">Jane Smith</h1>
                        <div className="text-black ">The breed recognition feature is very accurate and helpful</div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default main