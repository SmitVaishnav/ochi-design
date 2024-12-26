import { motion } from "framer-motion";
import React from "react";

function Marquee() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".05"
      className="w-full py-28 bg-[#004D43] rounded-3xl"
    >
      <div className="text uppercase border-t-[1px] font-bold border-b-[1px] border-zinc-300 flex whitespace-nowrap overflow-hidden items-center leading-[21vw]">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className="text-[30vw] px-10  font-['Test_Founders_Grotesk_x-Condensed'] mb-12"
        >
          we are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className="text-[30vw] px-10  font-['Test_Founders_Grotesk_x-Condensed'] mb-12"
        >
          we are ochi
        </motion.h1>
        
      </div>
    </div>
  );
}

export default Marquee;
