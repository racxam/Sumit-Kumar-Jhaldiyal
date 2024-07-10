"use client"
import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { companies, testimonials } from '@/data'
import { LampContainer } from './ui/Lamp'
import { motion } from 'framer-motion'

const Clients = () => {
    return (


        <div className='-mt-40' id='testimonials'>
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
            <div className='flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10 mt-20'>
                {companies.map(({ id, img, nameImg, name }) => (
                    <div key={id} className='flex md:max-w-60 max-w-32 gap-2'>
                        <img src={img} alt={name} className='md:w-10 w-5' />
                        <img src={nameImg} alt={name} className='md:w-24 w-20' />
                    </div>
                ))}
            </div>

        </div>

    )
}

export default Clients
