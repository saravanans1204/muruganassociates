import { color, motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import Tech from "./Tech";
import React, { useState, useEffect, useRef } from "react";
import TOPOLOGY from "vanta/dist/vanta.globe.min";
import * as THREE from "three";
const Hero = () => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        TOPOLOGY({
          el: myRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          size: 0.8,
         color: 0xf03e72,
         backgroundColor: 0x9BBEC8
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <section className={`relative w-full h-screen mx-auto`} ref={myRef}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#C4DAD2]" />
          <div className="w-1 sm:h-80 h-40 bg-green-100" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            We, at Murugan<span className="text-[#33372C]">Associates</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            provide financial and accounting services,{" "}
            <br className="sm:block hidden" />
            check us out!
          </p>
        </div>
      </div>

      {/* <ComputersCanvas /> */}
      {/* <div className="sm:pl-4 mt-4">
          <div>
            <h2
              className={
                   "sm:text-3xl text-5xl pb-4 font-russonOne font-medium no-underline align-middle tracking-wide normal-case leading-normal text-dark"
              }
            >
              Modern Design
            </h2>
          </div>
          <img
            className="sm:h-[475px] h-[765px] w-full bg-no-repeat bg-center relative z-10 header rounded-xl"
            src={header1}
            alt="header-phone"
          ></img>
        </div> */}

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[80px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
            {/* <div
              className="text-[#33372C] font-bold inline"
              style={{ gap: "0.2px" }}
            >
              <div>c</div>
              <div>l</div>
              <div>i</div>
              <div>c</div>
              <div>k</div>
            </div> */}
          </div>
        </a>
      </div>
      {/* <div  style={{position:"absolute",top:"45vh",width:"100vw"}}>
        <Tech />
      </div> */}
    </section>
  );
};

export default Hero;
