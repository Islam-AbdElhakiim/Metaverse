"use client";
import { TitleText } from "@/components/CustomTexts";
import { slideIn, staggerContainer } from "@/utilities/motion";
import { motion } from "framer-motion";
import Image from "next/image";

const EnterMetaverse = () => {
  return (
    <section className="px-6 lg:py-12 sm:p-16">
      <motion.div
        className="flex justify-between items-center px-5 border-b-[1px] border-b-white/50 pt-10 py-24"
        variants={staggerContainer}
      >
        <TitleText title="Enter the Metaverse" textStyle="text-white" />
        <motion.div
          variants={slideIn("up", "tween", 0.1, 0.35)}
          initial="hidden"
          whileInView='show'
          className="flex justify-around items-center px-5 h-10 rounded-3xl w-50 cursor-pointer bg-[#25618B] relative"
        >
          <Image
            src="headset.svg"
            alt="headset icon"
            width={16}
            height={16}
            className="object-fill mr-2"
          />
          <h2 className="text-white text-[10px]">ENTER METAVERSE</h2>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default EnterMetaverse;
