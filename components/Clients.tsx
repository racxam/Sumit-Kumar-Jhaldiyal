"use client"
import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { companies, testimonials } from '@/data'
import { LampContainer } from './ui/Lamp'
import { motion } from 'framer-motion'
import SocialMedia from './SocialMedia'

const Clients = () => {
    return (


        <div className='mt-0' id='testimonials'>
            <LampContainer

            >
                <motion.h1
                    initial={{ opacity: 0.5, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="heading mt-6 bg-gradient-to-br from-slate-300 to-blue-600 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
                >
                    Kind Words From {' '} <br />
                    <span className="bg-gradient-to-r from-slate-300 to-purple bg-clip-text text-transparent">
                        Satisfied Clients
                    </span>

                </motion.h1>
            </LampContainer>



            <div className='flex items-center justify-center -mt-32'>


                <InfiniteMovingCards
                    items={testimonials}
                    direction='right'
                    speed='slow'

                />
            </div>
            {/* //Here is Social Media testimonials */}
            <SocialMedia/>

            

        </div>

    )
}

export default Clients
