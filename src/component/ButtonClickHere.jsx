import { motion } from "framer-motion"

export default function ButtonClickHere({title}){
  return <>
    <motion.button 
      initial={{ opacity: 0, scale: 0.5, }}
      animate={{ opacity: 1, scale: 1,  }}
      transition={{ duration: 0.75, delay: 1 }} 
    className="px-4 py-2 bg-green-400 hover:bg-green-700 hover:text-white focus:ring-white text-black my-4 w-40 rounded-lg font-desc">
      {title}
    </motion.button>
  </>
}