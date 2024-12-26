import { motion } from "framer-motion";
import React, { useState } from "react";

function Featured() {
  const [ishovering, setHovering] = useState(false);
  const [ishovering2, setHovering2] = useState(false);
  return (
    <div
      data-scroll
      data-scroll-speed="-.1"
      className="w-full py-20 bg-zinc-900 rounded-3xl  "
    >
      <div className="w-full px-20 border-b-[1px] pb-12 border-zinc-700 ">
        <h1 className="text-7xl font-['neue_montreal'] tracking-wide">
          Featured projects
        </h1>
      </div>
      <div className="cards-container px-20">
        <div className="cards w-full flex gap-10 mt-10 ">
          <div
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className="card-container w-1/2  h-[65vh] relative"
          >
            <h1 className="absolute flex overflow-hidden left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-[9vw]  font-['Test_Founders_Grotesk_x-Condensed'] leading-none  text-[#CDEA68]">
              {"FYDE".split("").map((item, index) => {
                return (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={ishovering ? { y: "0" } : { y: "100%" }}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.06,
                    }}
                    className="inline-block translate-y-full"
                    key={index}
                  >
                    {item}
                  </motion.span>
                );
              })}
            </h1>
            <motion.div
              initial={{ scale: 1 }}
              animate={ishovering ? { scale: 0.95 } : { scale: 1 }}
              transition={{ ease: [0.45, 0, 0.55, 1], duration: 1 }}
              className="card w-full h-full rounded-xl overflow-hidden"
            >
              <motion.img
                initial={{ scale: 1 }}
                animate={ishovering ? { scale: 1.1 } : { scale: 1 }}
                transition={{ ease: [0.45, 0, 0.55, 1], duration: 1 }}
                className="w-full h-full bg-cover bg-center"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png"
              ></motion.img>
            </motion.div>
          </div>
          <div
            onMouseEnter={() => setHovering2(true)}
            onMouseLeave={() => setHovering2(false)}
            className="card-container w-1/2  h-[65vh] relative"
          >
            <h1 className="absolute flex overflow-hidden right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-[9vw]  font-['Test_Founders_Grotesk_x-Condensed'] leading-none text-[#CDEA68] ">
              {"TRAWA".split("").map((item, index) => {
                return (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={ishovering2 ? { y: "0" } : { y: "100%" }}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.06,
                    }}
                    className="inline-block translate-y-full"
                    key={index}
                  >
                    {item}
                  </motion.span>
                );
              })}
            </h1>
            <motion.div
              initial={{ scale: 1 }}
              animate={ishovering2 ? { scale: 0.95 } : { scale: 1 }}
              transition={{ ease: [0.45, 0, 0.55, 1], duration: 1 }}
              className="card w-full h-full rounded-xl overflow-hidden"
            >
              <motion.img
                initial={{ scale: 1 }}
                animate={ishovering2 ? { scale: 1.1 } : { scale: 1 }}
                transition={{ ease: [0.45, 0, 0.55, 1], duration: 1 }}
                className="w-full h-full bg-cover bg-center"
                src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-1326x1101.jpg"
              ></motion.img>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
