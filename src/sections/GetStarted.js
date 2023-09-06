"use client";
import { motion } from "framer-motion";
import { fadeIn, planetVariants, slideIn, staggerContainer } from "@/utilities/motion";
import Image from "next/image";
import { TitleText, TypingText } from "@/components/CustomTexts";
import { startingFeatures } from "@/constants";
import StartSteps from "@/components/StartSteps";

const GetStarted = () => {
  return (
    <section className="px-6 py-12 xs:p-8 sm:p-16 relative ">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="w-full 2xl:max-w-[1280px] mx-auto flex flex-col gap-8 lg:flex-row"
      >
        <motion.div
          variants={planetVariants("left")}
          className="flex-1 justify-center items-center hidden lg:flex"
        >
          <Image
            src={"/get-started.png"}
            alt="Get Started Image"
            fill
            className="w-[90%] h-[90%] object-contain "
          />
        </motion.div>
        <motion.div
            variants={fadeIn('left', 'tween', 0.2, 1)}
            className="flex-[0.75] flex flex-col justify-center"
        >
            <TypingText title={'/How Metaverse Works'} textStyle={'max-sm:text-center max-sm:my-2'} />
            <TitleText title={<>Get started with just a few clicks</>} textStyle={'max-sm:text-center max-sm:my-2'} />

            {startingFeatures.map((feature, index) => <StartSteps key={index} number={index + 1} text={feature} />)}

        </motion.div>
      </motion.div>
    </section>
  );
};

export default GetStarted;
