"use client";
import { fadeIn, slideIn } from "@/utilities/motion";
import { motion } from "framer-motion";
import Image from "next/image";
const Insight = ({ index, ...insight }) => {
  return (
    <motion.div
      variants={fadeIn("left", "spring", 0.1 * index, 1.5)}
      className="flex flex-col lg:flex-row items-center justify-around lg:justify-between lg:gap-x-20 m-10 gap-5 p-5 max-sm:border"
    >
        <div className="lg:w-[240px] lg:h-[200px] rounded-3xl relative hidden lg:block ">
            <Image
                src={insight.imgUrl}
                alt={insight.title}
                fill
                className="object-cover rounded-3xl"
            />
        </div>
        <div className=" max-w-full order-2">
            <h2 className="text-white text-[18px] lg:text-[32px] font-semibold">{insight.title}</h2>
            <p className="text-white text-[12px]">{insight.subtitle}</p>
        </div>
        <div className="max-sm:-top-[45px] w-[45px] h-[45px] lg:w-[90px] lg:h-[90px] rounded-[50%] border-2 lg:p-5 border-white relative flex justify-center items-center z-30 order-1 bg-[rgb(26,35,46)] ">
            <Image src={'/arrow.svg'} alt="arrow" width={30} height={30} className="w-[15px] lg:w-[30px] h-[15px] lg:h-[30px]" />
        </div>
    </motion.div>
  );
};

export default Insight;
