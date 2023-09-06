'use client';
import { motion } from "framer-motion";

const StartSteps = ({number, text}) => {
    return ( 
        <motion.div
            className="flex flex-row items-center gap-5  "
        >
            <div className="w-[60px] h-[60px] rounded-[20px] flex justify-center items-center bg-white/[0.08] my-5 lg:m-5  text-white text-[24px] ">
                0{number}
            </div>
            <p className="text-white font-normal">{text}</p>

        </motion.div>
     );
}
 
export default StartSteps;