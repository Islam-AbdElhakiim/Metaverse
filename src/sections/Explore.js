'use client';
import { motion } from "framer-motion";
import { TitleText, TypingText, ExploreCard } from "@/components/CustomTexts";
import { staggerContainer } from "@/utilities/motion";
import { exploreWorlds } from "@/constants";
import { useState } from "react";

const Explore = () => {
    const [active, setActive] = useState('world-2');


    return ( 
        <section id="explore" className="sm:p-16 xs:p-8 px-6 py-12">
            <motion.div
                variants={staggerContainer}
                viewport={{once: false, amount: 0.25}}
                className="flex flex-col mx-auto 2xl:max-w-[1280px] w-full"
            >
                <TypingText title='/The World' textStyle={'text-center'} />
                <TitleText title={<>Choose the world you want <br className="md:block hidden" /> to explore</>} textStyle={'text-center'}/>

                <div className="mt-[50px] flex flex-col lg:flex-row min-h-[70vh] gap-5">
                    {exploreWorlds && exploreWorlds.map((world, index) => (
                        <ExploreCard key={index} index={index} active={active} handleClick={setActive} {...world} />
                    ))}
                </div>
            </motion.div>
        </section>
     );
}
 
export default Explore;