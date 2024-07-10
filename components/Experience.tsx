"use client"
import { companies, workExperience } from '@/data';
import React from 'react'
import { LampContainer } from './ui/Lamp';
import { motion } from 'framer-motion';
import { Button } from './ui/MovingBorders';

const iconVariants = (duration:number):any =>({
    initial:{y:-10},
    animate:{
        y:[10,-10],
        transition:{
            duration:duration,
            ease:"linear",
            repeat:Infinity,
            repeatType:"reverse"
        }



    }
}
);

const Experience = () => {
    return (
        <div className='py-20' id='testimonials'>
              <div className='flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10 mt-20 mb-10 z-40 '>
                {companies.map(({ id, img, nameImg, name }) => (
                    <div key={id} className='flex md:max-w-60 max-w-32 gap-2'>
                        <img src={img} alt={name} className='md:w-10 w-5' />
                        {/* <img src={nameImg} alt={name} className='md:w-24 w-20' />
                         */}
                         <h2 className='lg:text-3xl md:text-2xl sm:text-xl text-sm'>{name}</h2>
                    </div>
                ))}
            </div>
          
            <motion.h1
               initial={{ opacity: 0,

               }}
              whileInView={{ opacity: 1,
        
               }}
          
               transition={{duration:1.5,delay:0.5}}
               viewport={{ once: true }}
             className='heading'> Offered{' '} <span className='text-purple'> Services</span> </motion.h1>



            <div className='flex items-center justify-center max-lg:mt-10 mt-12'> </div>
            <div className='w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10'>
                {workExperience.map(({ id, title, desc, className, thumbnail }) => (
                    <Button
                    key={id}
                    duration={Math.floor(Math.random()*10000)+10000}
                    borderRadius='0.75rem'
                    className='flex-1 text-white border-neutral-200 dark:border-slate-800'

                    >
                        <motion.div 
                        variants={iconVariants(Math.random() * (5 - 2.5) + 2.5)}
                        initial="initial" 
                        animate="animate"

                        className='flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2'>
                            <img src={thumbnail} alt={thumbnail}
                            className='lg:w-32 md:w-20 w-16'
                             />
                             <div className="lg:ms-5">
                                <h1 className='text-start text-xl md:text-2xl font-bold'>
                                    {title}
                            
                                </h1>
                                <p className='text-start text-white-100 mt-3 font-semibold'>
                                    {desc}
                                </p>

                             </div>
                        </motion.div>

                    </Button>
                ))}
            </div>
        </div>


    )
}

export default Experience;
