"use client"
import React from 'react'
import { motion, spring } from "framer-motion"
const InfoPara = () => {
    return (
        <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{duration:2}}

            className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'
        >Hi I&apos;m Sumit Jhaldiyal, a Next.js Developer based in India</motion.p>
    )
}

export default InfoPara
