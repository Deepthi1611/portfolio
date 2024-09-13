import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../style'
import { staggerContainer } from '../utils/motion'

// this is a higher order component which contains another component inside of it
// In React, Higher-Order Components (HOCs) are functions that take a component as an argument 
// and return a new component. HOCs are used to add or modify the behavior of components without directly changing their code. 
// They are a pattern based on React’s compositional nature

const SectionWrapper = (Component, idName) => 
    // staggerContainer() likely returns an object containing hidden and show states.
    // once: true: The animation will only play once when the element enters the viewport. If set to false, the animation will trigger every time the element enters the viewport (like when scrolling back up).
    // amount: 0.25: This defines how much of the element needs to be in the viewport for the animation to trigger. In this case, when 25% of the element is visible in the viewport, the animation will start.
  function HOC() {
    return (
        <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{once: true, amount:0.25}}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
        >
            <span className='hash-span' id={idName}>
                &nbsp;
            </span>
            <Component />
        </motion.section>
    )
}

export default SectionWrapper