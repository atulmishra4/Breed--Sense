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
                    <div className="welcome text-center content-center min-h-96 bg-sky-400 w-screen gap-4 ">
                        <h1 className="text-white font-bold text-4xl  m-5 md:text-5xl  ">Welcome to Breed-Sense</h1>
                        <h3 className="text-white font-medium m-5  text-lg">Image-based Breed Recognition <br /> Cattle &
                            Buffaloes
                            Identification System</h3>
                        <div className="flex justify-center font-bold text-white" >
                            <div className="m-2 bg-sky-500  w-fit  rounded-md ">
                                <motion.button
                                    className="login-button2 p-3   hover:bg-sky-600 rounded-md  "
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
        </div>
    )
}

export default main