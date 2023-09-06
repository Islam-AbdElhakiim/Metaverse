"use client";
import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer } from "@/utilities/motion";
import Image from "next/image";
import { TitleText, TypingText } from "@/components/CustomTexts";

const Signature = () => {
  return (
    <section className="px-6 lg:py-12 sm:p-16 relative mt-10">
      <motion.div
        variants={staggerContainer}
        className=" flex flex-col lg:flex-row items-center justify-between gap-8 h-max lg:h-[600px]"
      >
        <motion.div
          variants={fadeIn("left", "spring", 0.2, 0.25)}
          className=" flex-[0.8] h-full border border-white/50 rounded-3xl flex flex-col justify-end p-8"
        >
          <TitleText title='Samantha' textStyle='text-white md:text-[32px]' />
          <TypingText title='Founder Metaverus' textStyle='text-white mb-6' />
          <p className="text-white font-normal text-[20px] leading-10 max-w-[70%] my-2">
          “With the development of today&apos;s technology, metaverse is very useful for today&apos;s work, or can be called web 3.0. by using metaverse you can use it as anything”
          </p>
        </motion.div>
        <motion.div
          variants={slideIn("right", "spring", 0.2, 0.25)}
          className="relative  flex-[1.8] h-full border border-white/50 rounded-3xl hidden lg:block"
        >
          <Image
            src="/planet-09.png"
            alt="planet-09 Image"
            fill
            unoptimized
            className="object-cover object-right rounded-3xl"
          />
          <Image
            src="/stamp.png"
            alt="stamp Image"
            width={140}
            height={140}
            className=" absolute top-[10%] -left-[9.5%] object-contain"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Signature;
