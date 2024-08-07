
import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import InfoPara from './ui/InfoPara'
import Link from 'next/link'
import MagicButton from './ui/MagicButton'
import { GiClick } from "react-icons/gi";
import Spline from '@splinetool/react-spline'



function Hero() {
    return (
        <div
            className='pb-24 pt-36'
        >

            <div>


                <Spotlight
                    className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill="white"
                />
                <Spotlight
                    className='top-10 left-full ' fill="purple"
                />
                <Spotlight
                    className='top-28 left-80  h-[80vh] w-[50vw]' fill="blue" />


            </div>

            <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.04] bg-grid-black/[0.2] absolute top-0 left-0 flex items-center justify-center">
                {/* Radial gradient for the container to give a faded look */}
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
            </div>

            <div className="flex justify-center relative z-10">

                <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                    <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>
                        Dynamic Web Spell by Sumit Jhaldiyal
                    </h2>
                    <TextGenerateEffect
                        className='text-center text-[40px] md:text-5xl lg:text-7xl'
                        words='Transforming Ideas into Fluid Digital Experiences'
                    />
                    <InfoPara />

                    <Link 
                    className='mt-12'
                    href={"#about"}>
                        <MagicButton
                            title='Show my work'
                            icon={<GiClick />}
                            position='right'

                        />
                    </Link>

                </div>

            </div>
            <div className='relative sm:-mt-[8rem] md:-mt-[1.5rem] mt-[2rem] sm:h-[50vh] h-[15rem]'>


                <Spline
                    className='w-[50vw] sm:h-[!100vh] h-[120vh]'
                    scene="https://prod.spline.design/siVo6XF-Ptwbapsd/scene.splinecode"


                />
            </div>

        </div>
    )
}

export default Hero
