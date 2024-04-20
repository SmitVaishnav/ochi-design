import { motion } from "framer-motion";
import React, { useState } from "react";

function Cards() {
  const [isHovering, setHovering] = useState(false);
  const [isHovering2, setHovering2] = useState(false);
  return (
    <div className="w-full h-screen bg-zinc-200 flex items-center px-16 gap-5 rounded-xl">
      <div className="card-container h-[45vh] w-1/2">
        <div className="card relative rounded-xl w-full h-full  bg-[#004d43] flex items-center justify-center">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
          ></img>
          <div className="absolute left-0 right-0 bottom-0 p-20 lg:p-30 flex flex-wrap -mb-10 ">
            <button className="border-2 border-[#CDEA67] px-5 py-1 rounded-full text-[#CDEA67]">
              &copy;2019-2022
            </button>
          </div>
        </div>
      </div>
      <div className="card-container w-1/2 h-[45vh] flex gap-10">
        <div className="card rounded-xl w-1/2 h-full relative overflow-hidden  bg-[#212121] ">
          <div className="card-img relative flex w-full h-full items-center justify-center  ">
            <img
              src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
              className="w-32"
            ></img>
          </div>
          <div className=" absolute  card-footer w-full  -mt-[5.58vw] p-10 overflow-hidden flex items-center ">
            <motion.button
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
              initial={{
                backgroundColor: "#212121",
                color: "white",
              }}
              animate={
                isHovering
                  ? {
                      backgroundColor: "white",
                      color: "#212121",
                    }
                  : {
                      backgroundColor: "#212121",
                      color: "white",
                    }
              }
              transition={{ ease: [0.16, 1, 0.3, 1], duration: 1 }}
              style={{
                transitionProperty: "color",
                transitionTimingFunction: "ease",
                transitionDuration: ".8s",
              }}
              className="uppercase border-[2px] rounded-full px-5 py-1"
            >
              rating 5.0 on clutch
            </motion.button>
          </div>
        </div>
        <div className="card rounded-xl w-1/2 h-full relative  bg-[#212121] overflow-hidden">
          <div className="card-img relative flex w-full h-full items-center justify-center  ">
            <img
              src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
              className="w-32"
            ></img>
          </div>
          <div className=" absolute  card-footer w-full  -mt-[5.58vw] p-10 overflow-hidden flex items-center ">
            <motion.button
              onMouseEnter={() => setHovering2(true)}
              onMouseLeave={() => setHovering2(false)}
              initial={{
                backgroundColor: "#212121",
                color: "white",
              }}
              animate={
                isHovering2
                  ? {
                      backgroundColor: "white",
                      color: "#212121",
                    }
                  : {
                      backgroundColor: "#212121",
                      color: "white",
                    }
              }
              transition={{ ease: [0.16, 1, 0.3, 1], duration: 1 }}
              style={{
                transitionProperty: "color",
                transitionTimingFunction: "ease",
                transitionDuration: ".8s",
              }}
              className="uppercase border-[2px] rounded-full px-5 py-1"
            >
              business bootcamp alumni
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
