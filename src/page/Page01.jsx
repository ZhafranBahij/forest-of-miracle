import forest_landing_page from "../assets/img/Forest-05.jpg"
import forest_profile from "../assets/img/Forest-05.jpg"
import ButtonClickHere from "../component/ButtonClickHere"
import { motion } from "framer-motion"


export default function Page01(){
  return <>
    <div style={{backgroundImage: `url(${forest_landing_page})`}} className="h-screen bg-left-top bg-black flex flex-row px-8 py-8 text-white sm:items-end sm:bg-cover overflow-x-hidden" >
      <div className="flex flex-col gap-y-4">
        <motion.img 
        initial={{ opacity: 0, scale: 0.5, }}
        animate={{ opacity: 1, scale: 1, }}
        transition={{ duration: 0.5 }}
        src={forest_profile} alt="" className="rounded-lg sm:hidden" />
        <motion.h2     
          initial={{ opacity: 0, scale: 0.5, x: -100, }}
          animate={{ opacity: 1, scale: 1, x: 0, }}
          transition={{ duration: 0.5, delay: 0.25 }}
        className="text-md font-desc tracking-wide">Welcome to</motion.h2>
        <motion.h2 
          initial={{ opacity: 0, scale: 0.5, x: -100, }}
          animate={{ opacity: 1, scale: 1, x: 0, }}
          transition={{ duration: 0.75, delay: 0.5 }}
        className="text-5xl tracking-wide font-title">Forest of Miracle</motion.h2>
        <ButtonClickHere

        title="Get to Know"></ButtonClickHere>
      </div>
    </div>
  </>
}