"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { PinContainer } from "@/components/ui/3d-pin";
import { motion } from 'framer-motion'
import Image from "next/image";
import { Metadata } from "next";


export const metadata :Metadata={
  title:{
    absolute:"Projects - Sumit Jhaldiyal"
  }
}



const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <motion.h1
        initial={{
          opacity: 0,

        }}
        whileInView={{
          opacity: 1,

        }}

        transition={{ duration: 1.5, delay: 0.5 }}
        viewport={{ once: true }}
        className="heading">

        Curated Collection of {" "}
        <span className="text-purple">Recent Projects</span>
      </motion.h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <motion.div
            initial={{
            opacity: 0,
            transform: 'perspective(1000px) rotateX(45deg) scale(0.8)',
          }}
          whileInView={{
            opacity: 1,
            transform: 'perspective(1000px) rotateX(0deg) scale(1)',
          }}
          transition={{
            duration: 1,
            delay: 1,
          }}
          viewport={{ once: true }}
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer
              title={item.showTitle}
              href={item.link}

            >
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <Image src="/bg.png" alt="bgimg" width={200} height={200}/>
                </div>
                <Image
                  src={item.img}
                  alt={item.showTitle}
                  fill

                  style={{ objectFit: 'cover' }}
                  className="z-10 absolute bottom-0"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <Image src={icon} alt="icon5" width={100} height={100} className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    {(item.checkLive)? "Check Live Site":"Source Code" }
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;