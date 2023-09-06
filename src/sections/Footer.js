"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Footer = () => {
  return (
    <section className="px-6 py-12 xs:p-8 sm:p-16">
      <motion.div className="flex flex-col lg:flex-row justify-between items-center gap-5">
        <h2 className=" uppercase text-white font-bold cursor-pointer">Metaversus</h2>

        <p className="text-white/50">
          Copyright © 2023 Metaversus. All rights reserved.
        </p>
        <div className="flex justify-between relative gap-8">
          <Image src="twitter.svg" alt="twitter logo" width={20} height={20} />

          <Image
            src="instagram.svg"
            alt="instagram logo"
            width={20}
            height={20}
          />
          <Image
            src="linkedin.svg"
            alt="linkedin logo"
            width={20}
            height={20}
          />
          <Image
            src="facebook.svg"
            alt="facebook logo"
            width={20}
            height={20}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Footer;
