"use client";
import { TitleText, TypingText } from "@/components/CustomTexts";
import { fadeIn, staggerContainer } from "@/utilities/motion";
import { motion } from "framer-motion";
import Image from "next/image";

const Worlds = () => {
  return (
    <section className="px-6 py-12 xs:p-8 sm:p-16 relative mt-10">
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="w-full 2xl:max-w-[1280px] mx-auto flex flex-col lg:px-32"
      >
        <TypingText title="/People on the world!" textStyle="text-center" />
        <TitleText
          title={
            <>
              Track friends around you and invite them to play together in the
              same world
            </>
          }
          textStyle="text-center"
        />
        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className="relative mt-[68px] "
        >
          <Image
            src="/map.png"
            height="0"
            width="0"
            alt="map"
            className="w-full h-full object-fill"
            unoptimized
            draggable={false}
          />
          <div className="absolute top-4 left-20 w-[50px] lg:w-[80px] h-[50px] lg:h-[80px] p-[6px] rounded-[50%] bg-[#5d6680] flex justify-center items-center drop-shadow-xl hover:drop-shadow-[0_10px_30px_rgba(255,94,0,0.50)] cursor-pointer border">
            <Image
              src="/people-02.png"
              height="0"
              width="0"
              alt="people-21"
              className="w-[100%] h-[100%] object-contain "
              unoptimized
            />
          </div>
          <div className="absolute bottom-20 right-20 w-[50px] lg:w-[80px] h-[50px] lg:h-[80px]  p-[6px] rounded-[50%] bg-[#5d6680] flex justify-center items-center drop-shadow-xl hover:drop-shadow-[0_10px_30px_rgba(255,94,0,0.50)] cursor-pointer">
            <Image
              src="/people-01.png"
              height="0"
              width="0"
              alt="people-01"
              className="w-[100%] h-[100%] object-contain "
              unoptimized
            />
          </div>
          <div className="absolute top-1/2 left-[45%] w-[50px] lg:w-[80px] h-[50px] lg:h-[80px]  p-[6px] rounded-[50%] bg-[#5d6680] flex justify-center items-center drop-shadow-xl hover:drop-shadow-[0_10px_30px_rgba(255,94,0,0.50)] cursor-pointer">
            <Image
              src="/people-03.png"
              height="0"
              width="0"
              alt="people-03"
              className="w-[100%] h-[100%] object-contain "
              unoptimized
            />
          </div>
          <div className="absolute w-[60px] lg:w-[120px] h-[30px] lg:h-[60px] top-32 lg:top-52 lg:left-24 left-12  rounded-[20px] bg-gray-500  p-[6px] hover:drop-shadow-[0_10px_30px_rgba(255,94,0,0.50)] cursor-pointer">
            <Image
              src="/planet-08.png"
              height="0"
              width="0"
              alt="people-04"
              className="w-[100%] h-[100%] object-contain "
              unoptimized
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Worlds;
