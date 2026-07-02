import pp2 from '../assets/pp2.png'
import download from "../assets/download.png"
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'
import gmail from '../assets/gmail.png'
import { motion } from "framer-motion"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
} from "@/components/ui/popover"

const textContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
}
const textItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}
const imageVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
}
const socialContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.6,
    },
  },
}
const socialItemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
}

const Introduction = () => {
  return (
    <div
      className='relative flex justify-center z-40' id='introduction'
    >
      <div className={`flex sm:flex-row sm:justify-between sm:gap-0 gap-5 flex-col-reverse items-center text-white w-full xl:max-w-[1300px] xl:px-[50px] lg:max-w-[1010px] lg:px-[50px] md:max-w-[700px] sm:max-w-[580px] lg:pt-45 sm:pt-35 pt-15`}>
        <motion.div
          className='flex flex-col xl:gap-3 lg:gap-2 md:gap-2 gap-1 xl:max-w-[610px] lg:max-w-[510px] md:max-w-[410px] sm:max-w-[350px] max-w-[302px]'
          variants={textContainerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className='xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl text-xl font-bold'
            variants={textItemVariants}
          >
            Hello, I'm Juvens!
          </motion.h1>
          <motion.h2
            className='xl:text-2xl md:text-xl sm:text-lg text-sm text-white font-semibold sm:mt-2 mt-0.5'
            variants={textItemVariants}
          >
            A Full-Stack Web Developer.
          </motion.h2>
          <motion.p
            className='xl:text-lg md:text-base sm:text-sm text-xs xl:leading-7 lg:leading-6.5 md:leading-6 sm:leading-5.5 leading-5 text-white/70 lg:mb-3 mb-1'
            variants={textItemVariants}
          >
            Architecting scalable backend systems and crafting intuitive, pixel-perfect interfaces. I build full-stack web applications where high-performance engineering meets exceptional user experience.
          </motion.p>
          <motion.a
            href={encodeURI("/CV - Juvens Laurensius Dwitama.pdf")}
            target="_blank"
            rel="noopener noreferrer"
            className='bg-white/20 backdrop-blur-md sm:rounded-md rounded-sm cursor-pointer w-fit'
            variants={textItemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="flex justify-center items-center sm:gap-2 gap-1 sm:rounded-md rounded-sm hover:bg-white/15 md:py-2 lg:px-5 sm:py-2 sm:px-4 py-1.5 px-3 transition duration-200">
              <p className='xl:text-lg md:text-base sm:text-sm text-xs font-[500] text-white'>Resume</p>
              <img src={download} alt="" className='sm:h-[14px] h-[10px] font-[500]' />
            </div>
          </motion.a>
        </motion.div>

        <div className='flex lg:flex-row sm:flex-col justify-center items-center md:gap-6 gap-4'>
          <motion.img
            src={pp2}
            alt="Juvens"
            className='xl:h-[500px] xl:w-[450px] lg:h-[350px] lg:w-[300px] md:h-[300px] md:w-[250px] sm:h-[250px] sm:w-[200px] h-[300px] w-[250px] object-cover sm:rounded-[70%_30%_30%_70%_/_60%_40%_60%_40%] border border-white/10 shadow-xl sm:hover:rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] rounded-lg transition-all duration-1000 ease-in-out'
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          />
          <motion.ul
            className='flex lg:flex-col sm:flex-row flex-col lg:gap-4 gap-3'
            variants={socialContainerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.a
              href="https://www.linkedin.com/in/juvens-laurensius-dwitama/"
              target="_blank"
              variants={socialItemVariants}
              whileHover={{ scale: 1.15, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <img src={linkedin} alt="" className='xl:h-[48px] md:h-[40px] h-[36px] cursor-pointer transition duration-200' />
            </motion.a>

            <motion.a
              href="https://github.com/juvenslaurensiusdwitama"
              target="_blank"
              variants={socialItemVariants}
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <img src={github} alt="" className='xl:h-[48px] md:h-[40px] h-[36px] cursor-pointer transition duration-300' />
            </motion.a>

            <Popover>
              <motion.span
                className="inline-block" 
                variants={socialItemVariants}
                whileHover={{ scale: 1.15, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2, ease: "easeOut" }} 
              >
                <PopoverTrigger asChild>
                  <img
                    src={gmail}
                    alt=""
                    className="xl:h-[48px] md:h-[40px] h-[36px] cursor-pointer"
                  />
                </PopoverTrigger>
              </motion.span>
              <PopoverContent align="end" className="w-fit bg-black/30 backdrop-blur-md">
                <PopoverHeader>
                  <PopoverTitle className="text-white">Gmail:</PopoverTitle>
                  <PopoverDescription>
                    <h1 className='text-white'>juvenslaurensiusdwitama@gmail.com</h1>
                  </PopoverDescription>
                </PopoverHeader>
              </PopoverContent>
            </Popover>
          </motion.ul>
        </div>
      </div>
    </div>
  )
}

export default Introduction