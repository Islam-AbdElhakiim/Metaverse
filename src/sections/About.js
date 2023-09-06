import { motion } from "framer-motion";
import {
  fadeIn,
  slideIn,
  staggerContainer,
  textVariant,
} from "@/utilities/motion";
import { TypingText } from "../components/CustomTexts";
import Image from "next/image";

const About = () => {
  return (
    <section className="px-6 py-12 xs:p-8 sm:p-16">
      <div className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 z-0" />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="w-full xl:max-w-[1280px] mx-auto flex justify-center items-center flex-col"
      >
        <TypingText title="/About-Metaverse" textStyle="text-start text-gray-400" />
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 0.5)}
          className="mt-[8px] font-normal text-[20px] sm:text-[32px] text-justify md:text-center leading-[60px] text-secondary-white"
        >
          <span className="text-white font-bold">Metaverse</span> is a new thing
          in the future, where you can enjoy the virtual world by feeling like
          it&apos;s really real, you can feel what you feel in this metaverse world,
          because this is really the{" "}
          <span className="text-white font-bold">
            {" "}
            madness of the metaverse
          </span>{" "}
          of today, using only <span className="text-white font-bold">
            VR
          </span>{" "}
          devices you can easily explore the metaverse world you want, turn your
          dreams into reality. Let&apos;s{" "}
          <span className="text-white font-bold">explore</span> the madness of
          the metaverse by scrolling down{" "}
        </motion.p>
      <motion.div variants={fadeIn('up', 'tween', 0.2, 0.5)} className="z-10">
        <a href="#explore">
        <Image
          src="/arrow-down.svg"
          alt="arrow down icon"
          width={18}
          height={28}
          className="mt-[28px] object-contain mx-auto cursor-pointer"
        />
        </a>
      </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
