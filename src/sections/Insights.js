"use client";
import { motion } from "framer-motion";
import { staggerContainer } from "@/utilities/motion";
import { TitleText, TypingText } from "@/components/CustomTexts";
import { insights } from "@/constants";
import Insight from "@/components/Insight";

const Insights = () => {
  return (
    <section className="lg:px-6 lg:py-12 sm:p-16 relative my-5 ">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <motion.div>
          <TypingText title="/Insights" textStyle="text-center" />
          <TitleText title="Insights About Metaverse" textStyle="text-center" />
        </motion.div>
        {
            insights.map((insight, index) => <Insight key={index} index={index} {...insight} />)
        }
      </motion.div>
    </section>
  );
};

export default Insights;
