import { motion } from "framer-motion";
import React, { useState } from "react";
import { BsArrowUpRight } from "react-icons/bs";

function About() {
  const [isHovering, setHovering] = useState(false);
  return (
    <div
      data-scroll
      data-scroll-speed="-.1.5"
      className="w-full p-20 m-h-screen bg-[#CDEA68] rounded-3xl text-black"
    >
      <h1 className="font-['Neue_Montreal'] text-[4vw] leading-[4.2vw] tracking-tight ">
        Ochi is a strategic partner for fast-growing tech businesses that need
        to raise funds, sell products, explain complex ideas, and hire great
        people.
      </h1>
      <div className="w-full border-t-[1px] pt-6 -pb-12 mt-24  border-[#99a46e] flex font-['Neue_Montreal'] ">
        <div className="w-1/2 ">
          <h1 className="text-7xl">Our approch:</h1>
          <motion.button
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className=" bg-zinc-900 rounded-full mt-5 h-[3.7vw] w-[12vw] tracking-wide text-white flex justify-between  items-center uppercase"
          >
            <div className="ml-7">Read More</div>
            <motion.div
              initial={{ scale: 0.3 }}
              animate={isHovering ? { scale: 1 } : { scale: 0.3 }}
              transition={{ duration: 1 }}
              className="white-circle w-14 h-14 mr-2 rounded-full bg-white text-zinc-900 flex items-center justify-center scale-50"
            >
              <BsArrowUpRight className="text-xl" />
            </motion.div>
          </motion.button>
        </div>
        <motion.div
          initial={{ scale: 1 }}
          animate={isHovering ? { scale: 0.95 } : { scale: 1 }}
          transition={{ ease: [0.45, 0, 0.55, 1], duration: 1 }}
          className="w-1/2 h-[60vh] rounded-3xl relative overflow-hidden"
        >
          <motion.div
            initial={{ scale: 1 }}
            animate={isHovering ? { scale: 1.1 } : { scale: 1 }}
            transition={{ ease: [0.45, 0, 0.55, 1], duration: 1 }}
            className="w-full h-full absolute rounded-3xl bg-center bg-cover bg-[url('https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg')]"
          ></motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
