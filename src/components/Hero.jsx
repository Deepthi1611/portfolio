import {motion, AnimatePresence} from 'framer-motion'
import {styles} from '../style'
import {ComputersCanvas} from "./canvas"
import { useState, useEffect } from 'react'

const Hero = () => {
  const [showName, setShowName] = useState(false);

  useEffect(() => {
    setShowName(true);
  }, []);

  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] mx-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
          <div className='w-1 sm:h-80 h-40 violet-gradient'/>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}`}>
            Hi, I am{' '}
            <span className='text-[#915eff]'>
              <AnimatePresence initial={false}>
                {showName && (
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                  >
                    D
                  </motion.span>
                )}
                {showName && (
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.7 }}
                  >
                    e
                  </motion.span>
                )}
                {/* Repeat the above pattern for each letter */}
                {showName && (
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.9 }}
                  >
                    e
                  </motion.span>
                )}
                {/* Continue with each letter */}
                {showName && (
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 1.1 }}
                  >
                    p
                  </motion.span>
                )}
                {showName && (
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 1.3 }}
                  >
                    t
                  </motion.span>
                )}
                {showName && (
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 1.5 }}
                  >
                    h
                  </motion.span>
                )}
                {showName && (
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 1.7 }}
                  >
                    i
                  </motion.span>
                )}
                {showName && (
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 1.9 }}
                  >
                    {' '}
                  </motion.span>
                )}
                {showName && (
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 2.1 }}
                  >
                    P
                  </motion.span>
                )}
                {showName && (
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 2.3 }}
                  >
                    u
                  </motion.span>
                )}
                {showName && (
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 2.5 }}
                  >
                    r
                  </motion.span>
                )}
                {showName && (
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 2.7 }}
                  >
                    i
                  </motion.span>
                )}
                {showName && (
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 2.9 }}
                  >
                    j
                  </motion.span>
                )}
                {showName && (
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 3.1 }}
                  >
                    a
                  </motion.span>
                )}
                {showName && (
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 3.3 }}
                  >
                    l
                  </motion.span>
                )}
                {showName && (
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 3.5 }}
                  >
                    a
                  </motion.span>
                )}
              </AnimatePresence>
            </span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>I am a full stack developer with a focus on <br className='hidden sm:block'/> building scalable and efficient web applications</p>
        </div>
      </div>
      <ComputersCanvas />
      <div className='absolute w-full flex justify-center items-center mt-5 z-10' style={{ bottom: '-3%' }}>
      <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.dev
            animate = {{
              y:[0,24,0]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'loop'
            }}
            className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero