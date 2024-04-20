import { motion } from "framer-motion";
import React, { useState } from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  const [isHovering, setHovering] = useState(false);

  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.6"
      className="w-full h-screen bg-zinc-900 pt-1 "
    >
      <div className="textstructure mt-48 px-16">
        {["WE CREATE", "eye-opening", "presentations"].map((item, index) => {
          return (
            <div className="masker">
              <div className="w-fit flex items-center">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "8.7vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className="w-[8.7vw] h-[5.8vw] relative top-[0.5vw] rounded-lg mr-4 bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg')] "
                  ></motion.div>
                )}
                <h1
                  key={index}
                  className="uppercase leading-[6.5vw] flex items-center h-full text-[8.5vw] font-['Test_Founders_Grotesk_X-Condensed']"
                >
                  {" "}
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-700 mt-72 flex justify-between items-center px-16 py-6">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => {
          return (
            <p
              key={index}
              className="text-[19px] font-light leading-none tracking-wide text-white"
            >
              {item}
            </p>
          );
        })}
        <div className="start flex items-center gap-2">
          <motion.div
            // whileHover={{
            //   backgroundColor: "whitesmoke",
            //   color: "black",
            //   transition: { duration: 4, ease: [0.16, 1, 0.3, 1] },
            // }}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            initial={{ backgroundColor: "#18181b", color: "white", scale: 1 }}
            animate={
              isHovering
                ? { backgroundColor: "white", color: "#18181b", scale: 1.05 }
                : { backgroundColor: "#18181b", color: "white", scale: 1 }
            }
            transition={{ ease: [0.16, 1, 0.3, 1], duration: 1 }}
            style={{
              transitionProperty: "color",
              transitionTimingFunction: "ease",
              transitionDuration: ".5s",
            }}
            className="px-4 py-2 border-[1px] font-light rounded-full uppercase cursor-pointer bg-zinc-800"
          >
            start the project
          </motion.div>

          <motion.div
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            initial={{
              backgroundColor: "#18181b",
              color: "white",
              scale: 1,
            }}
            animate={
              isHovering
                ? {
                    backgroundColor: "white",
                    color: "#18181b",
                    scale: 1.05,
                  }
                : {
                    backgroundColor: "#18181b",
                    color: "white",
                    scale: 1,
                  }
            }
            transition={{ ease: [0.16, 1, 0.3, 1], duration: 1 }}
            style={{
              transitionProperty: "color",
              transitionTimingFunction: "ease",
              transitionDuration: ".5s",
            }}
            // whileHover={{ backgroundColor: "white" }}
            className="w-10 h-10 rounded-full border-[1px] bg-zinc-800 items-center flex justify-center "
          >
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
