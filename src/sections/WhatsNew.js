"use client";
import { motion } from "framer-motion";

import {
  fadeIn,
  planetVariants,
  slideIn,
  staggerContainer,
} from "@/utilities/motion";
import Image from "next/image";
import { TitleText, TypingText } from "@/components/CustomTexts";
import { newFeatures, startingFeatures } from "@/constants";
import StartSteps from "@/components/StartSteps";
import NewFeatures from "@/components/NewFeatures";

const WhatsNew = () => {
  return (
    <section className="px-6 py-12 xs:p-8 sm:p-16 relative ">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="w-full 2xl:max-w-[1280px] mx-auto flex flex-col lg:flex-row"
      >
        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] flex flex-col justify-center"
        >
          <TypingText title={"/Whats New?"}  textStyle={'max-sm:text-center max-sm:my-2'} />
          <TitleText
            textStyle={"sm:text-[32px] md:text-[55px] max-sm:text-center max-sm:my-2"}
            title={<>What&apos;s new about Metaversus?</>}
          />
          <div className="flex flex-col lg:flex-row justify-between items-center m-4 gap-5">
            {newFeatures.map((feature, index) => (
              <NewFeatures key={index} {...feature} />
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={planetVariants("right")}
          className="flex-[1] justify-center items-center hidden lg:flex"
        >
          <Image
            src={"/whats-new.png"}
            alt="whats-new Image"
            fill
            className="object-contain"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhatsNew;
