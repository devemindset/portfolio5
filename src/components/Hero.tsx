"use client"
import type { FC } from 'react';
import { motion } from "framer-motion";




const Hero: FC = () => {
        return (
            <>

            
            <section className='relative flex items-center justify-center  w-screen h-screen'>
                <motion.div className="absolute inset-0 bg-cover bg-center"
                initial= {{ opacity:0, y: 40 }}
                animate = {{opacity : 1, y: 0}}
                transition={{ duration:1, delay:0.3}}
                style={{
                    backgroundImage : "url('./template_3/hero-bg.jpg')"
                }}
                >
                    
            <div className="absolute inset-0 bg-black/50" />

                </motion.div>

                
                <div className='relative flex justify-center flex-col text-[var(--text-element)] items-center'>
                <motion.h1 className='text-3xl md:text-3xl lg:text-6xl  2xl:text-9xl font-bold'
                    initial= {{ opacity:0, y: -100 }}
                    animate = {{opacity : 1, y: 0}}
                    transition={{ duration:1, delay:0.6}}
                >Rose Smith</motion.h1>
                <motion.h3 className=' text-center mt-2 sm:mt-4 text-sm  2xl:text-5xl text-[var(--color-foreground)] italic'
                initial= {{ opacity:0, y: -100 }}
                animate = {{opacity : 1, y: 0}}
                transition={{ duration:1, delay:0.7}}
                >{"I'm "} a professional illustrator from San Francisco
                
                
                
                
                </motion.h3>
                <button className='bg-[var(--btn-bg)] md:py-2 lg:px-10 px-5 py-1 text-[var(--btn-text)] mt-3 lg:mt-10 rounded-4xl font-semibold hover:scale-105 hover:bg-[var(--btn-hover)] transition-all cursor-pointer shadow-2xl hover:text-[var(--btn-bg)] '>ABOUT ME</button>
                </div>
            </section>
            </>
        );
}
export default Hero;