"use client"
import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'
import {motion} from "framer-motion"
const Footer = () => {
  return (
    <footer className='w-full mb-[100px] pb-10 md:mb-2' id='contact'>
      {/* <div className="w-full absolute left-0 -bottom-[19rem] min-h-96">
        <img src="/footer-grid.svg" alt="grid" className='w-full h-full opacity-50' />
      </div> */}

      <div className='flex flex-col items-center'>
        <motion.h1 
          initial={{ opacity: 0,

          }}
         whileInView={{ opacity: 1,
   
          }}
     
         transition={{duration:1.5,delay:0.5}}
          viewport={{ once: true }}
        className='heading lg:max-w-[45vw]'>Ready to Take <span className='text-purple'>Your outside presence to the Next Level</span></motion.h1>
        <p className='text-white-200 md:mt-10 my-5 text-center'>
            Reach out to me today and let &apos;s discuss how I can help you achieve your goals!
        </p>
        <a href="mailto:sumitracxam@gmail.com">
            <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow/>}
            position='right'
            />
        </a>

      </div>
      <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
        <p className='md:text-base text-sm md:font-normal font-light'>copyright© 2024 Sumit kumar Jhaldiyal</p>
        <div className='flex items-center md:gap-3 gap-6'>
            {socialMedia.map(({id,img,link})=>(
                <div key={id}
                className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'
                >
                  <a href={link} target='_blank' rel="noopener noreferrer" >
                    <img src={img} alt={img} width={20} height={20} />

                  </a>

                </div>
            ))}

        </div>
      </div>
    </footer>
  )

}

export default Footer
