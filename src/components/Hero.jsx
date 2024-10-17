import {motion} from 'framer-motion'
import {styles} from '../style'
import {ComputersCanvas} from "./canvas"
import DecoderTextAnimation from '../components/Decoder'
import DecodeAnimation from "react-decode-animation";
import { useState, useRef, useEffect } from 'react';
import '../styles/hero.css'

const Hero = () => {
  const texts = ["Full Stack developer", "FrontEnd Developer", "Backend Developer"];
  const [textIndex, setTextIndex] = useState(0);
  const [text, setText] = useState(texts[textIndex]);
  const decodeRef = useRef();

  useEffect(() => {
    const intervalId = setInterval(() => {
        setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setText(texts[textIndex]);
        decodeRef.current = Math.random().toString();
    }, 3000);

    return () => clearInterval(intervalId);
}, [textIndex, texts]);

  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] mx-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
          <div className='w-1 sm:h-80 h-40 violet-gradient'/>
        </div>
        <div>
          <h1 className={`main ${styles.heroHeadText}`}>
            <span className="hello">Hi, I am &nbsp;</span>
            <span className="name">
              <DecoderTextAnimation text="Deepthi Purijala" duration={3} />
            </span>
          </h1>
          <div className="designation"> {'< '}
            <span className="designation">
              <DecodeAnimation
                key={decodeRef.current}
                text={text}
                autoplay
              />
            </span>{' />'}
          </div>
          <p className={`${styles.heroSubText} mt-2 text-white-100 hidden sm:block tagline opacity-80`}>I am a full stack developer with a focus on building scalable and efficient web applications</p>
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