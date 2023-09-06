"use client";
import { motion } from "framer-motion";
import styles from "../styles";
import { slideIn, staggerContainer, textVariant } from "@/utilities/motion";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={`${styles.yPaddings} xs:pl-16 pl-6`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        // viewport={{ once: false, amount: 0.5 }}
        className="2xl:max-w-[1280px] w-full mx-auto flex flex-col"
      >
        
        <div className="flex flex-col justify-center items-center relative z-10 ">
          <motion.h1
            className="font-sans text-white font-bold text-[44px] sm:text-[60px] md:text-[100px] lg:text-[144px] leading-[64.4px] sm:leading-[74.4px] md:leading-[114.4px] lg:leading-[158.4px] uppercase"
            variants={textVariant(1.1)}
          >
            Metaverse
          </motion.h1>
          <motion.div
            variants={textVariant(1.2)}
            className="flex justify-center items-center"
          >
            <h1 className="font-bold text-white text-[44px] sm:text-[60px] md:text-[100px] lg:text-[144px] leading-[64.4px] sm:leading-[74.4px] md:leading-[114.4px] lg:leading-[158.4px]">
              MA
            </h1>

            <div className="md:w-[212px] sm:w-[80px] w-[60px] md:h-[108px] sm:h-[48px] h-[38px] md:border-[18px] border-[9px] rounded-r-[50px] border-white mx-[6px] sm:mx-2 sm:ml-3 mt-2"></div>

            <h1 className="font-bold text-white text-[44px] sm:text-[60px] md:text-[100px] lg:text-[144px] leading-[64.4px] sm:leading-[74.4px] md:leading-[114.4px] lg:leading-[158.4px]">
              NESS
            </h1>
          </motion.div>
        </div>
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="relative w-full md:-mt-[40px] -mt-[12px] bg-gradient-to-r "
        >
        <h1>/home</h1>
        <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[5px]" />
          <Image
            src={"/cover.png"}
            alt="Cover"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-0 relative"
          />
          <div className="flex justify-end -mt-[80px]">
            <Image
              src={"/stamp.png"}
              width={200}
              height={200}
              // sizes="100vw"
              className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain cursor-pointer z-10"
              alt="Stamp image"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
