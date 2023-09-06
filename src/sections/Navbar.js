"use client";
import { motion } from "framer-motion";
import styles from "../styles";
import { navVariants } from "@/utilities/motion";
import Image from "next/image";
const Navbar = () => {
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}
    >
      <div className=" absolute w-1/2 inset-0 gradient-01" />
      <div
        className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
      >
        <Image
          src={"/search.svg"}
          width={24}
          height={24}
          className=" object-contain"
          alt="search"
        />

        <h2 className="font-extrabold text-[24px] leading-[30px] text-white">MetaVersus</h2>

        <Image src={'/menu.svg'} alt="menu icon" width={24} height={24} className="object-contain cursor-pointer"/>
      </div>
    </motion.nav>
  );
};

export default Navbar;
