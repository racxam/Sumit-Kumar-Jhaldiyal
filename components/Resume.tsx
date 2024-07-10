"use client"
import React from "react";
import { MacbookScroll } from "@/components/ui/MacScrool";
import Link from "next/link";
import {motion} from 'framer-motion'
function Resume() {
  return (

          
    <div className="overflow-hidden w-full mt-20 flex flex-col justify-start items-center" id="resume">
            <motion.h1 
               initial={{ opacity: 0,

               }}
              whileInView={{ opacity: 1,
        
               }}
          
              transition={{duration:1,delay:0}}
               viewport={{ once: true }}
            className='heading'> My{' '} <span className='text-purple'>Resume</span> </motion.h1>
      
      <MacbookScroll
        src={`/resume.png`}
        showGradient={false}
      />
    </div>
  );
}

export default Resume
