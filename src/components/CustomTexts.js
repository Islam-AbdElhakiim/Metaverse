"use client";
import {
  fadeIn,
  slideIn,
  staggerContainer,
  textContainer,
  textVariant2,
} from "@/utilities/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";

export const TypingText = ({ title, textStyle }) => {
  return (
    <motion.p
      className={`font-normal text-[18px] text-secondary-white ${textStyle}`}
      variants={textContainer}
      initial="hidden"
      whileInView="show"
    >
      {Array.from(title).map((char, index) => (
        <motion.span
          variants={textVariant2}
          key={index}
          viewport={{ once: false, amount: 0.01 }}
        >
          {char === " " ? "-" : char}
        </motion.span>
      ))}
    </motion.p>
  );
};

export const TitleText = ({ title, textStyle }) => {
  return (
    <motion.h2
      className={`mt-[8px] font-bold md-text-[40px] md:text-[64px] text-white ${textStyle}`}
      variants={textVariant2}
      initial="hidden"
      whileInView="show"
    >
      {title}
    </motion.h2>
  );
};

export const ExploreCard = ({ index, active, handleClick, ...card }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      initial="hidden"
      whileInView="show"
      className={`relative ${
        active === card.id ? "flex-[10] lg:flex-[3.5]" : "flex-[2] lg:flex[0.5]"
      } flex items-center justify-center m-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer text-white `}
    >
      <Image
        src={card.imgUrl}
        alt={card.title}
        fill
        className="object-cover"
        onClick={() => handleClick(card.id)}
      />

      {active === card.id ? (
        <div className="w-full h-max absolute bottom-0 z-10 flex-col justify-center items-center lg:justify-around lg:items-start  px-5 bg-[rgba(0,0,0,0.5)]">
          <div className=" relative w-[60px] h-[60px] rounded-[30px] bg-black/20">
            <Image
              src="/headset.svg"
              alt="headset svg Image"
              fill
              className="p-4"
            />
          </div>
          <h5 className=" uppercase lg:mt-5 text-[14px]">Enter Metaverse</h5>
          <h1 className=" capitalize lg:mt-5 text-[32px] font-bold">
            {card.title}
          </h1>
        </div>
      ) : (
        <h1 className="capitalize text-[20px] lg:text-[32px] font-bold lg:-rotate-90 absolute left-1/2 -translate-x-1/2 bottom-[20%] whitespace-nowrap z-0" onClick={() => handleClick(card.id)}>
          {card.title}
        </h1>
      )}
    </motion.div>
  );
};

export default ExploreCard;

/* 
{active === card.id ? (
        <div className="w-full h-[30%] absolute bottom-0 z-10 flex-col justify-around items-start ml-20">
          <div className=" relative w-[60px] h-[60px] rounded-[30px] bg-black/20">
            <Image
              src="/headset.svg"
              alt="headset svg Image"
              fill
              className="p-4"
            />
          </div>
          <h5 className=" uppercase mt-5 text-[14px]">Enter Metaverse</h5>
          <h1 className=" capitalize mt-5 text-[32px] font-bold">
            {card.title}
          </h1>
        </div>
      ) : (
        <h1 className="capitalize text-[32px] font-bold -rotate-90 absolute left-1/2 -translate-x-1/2 bottom-[20%] whitespace-nowrap">
          {card.title}
        </h1>
      )}
       */
