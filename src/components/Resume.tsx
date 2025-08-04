'use client'
import type { FC } from 'react';
import {motion} from "framer-motion"
interface ResumeProps {
    title : string;
    field : string;
    interval : string;
    description : string;
    institut : string;
}

const Resume: FC<ResumeProps> = ({title,field,interval,description,institut}) => {
        return (
            <div className='w-full'>
                <motion.h4 className='font-bold py-5 text-xl'
                initial= {{ opacity:0, y: 40 }}
                    animate = {{opacity : 1, y: 0}}
                    transition={{ duration:1, delay:0.3}}
                >{title}</motion.h4>
                <div className='border-l-2 border-[var(--background-element)] rounded-l-sm space-y-5 pl-3'>
                    <motion.div className='text-[var(--text-element-small)] font-bold text-xl'
                    initial= {{ opacity:0, y: 40 }}
                    animate = {{opacity : 1, y: 0}}
                    transition={{ duration:1, delay:0.3}}
                    >
                    {field}
                    </motion.div>
                    <motion.div className='font-bold text-sm'
                    initial= {{ opacity:0, y: 40 }}
                    animate = {{opacity : 1, y: 0}}
                    transition={{ duration:1, delay:0.3}}
                    >
                        {interval}
                    </motion.div>
                    <motion.div className='text-[var(--text-element-small)] text-sm'
                    initial= {{ opacity:0, y: 40 }}
                    animate = {{opacity : 1, y: 0}}
                    transition={{ duration:1, delay:0.3}}
                    >
                        {institut}
                    </motion.div>
                    <motion.div className='text-[var(--text-element-small)] text-sm'
                    initial= {{ opacity:0, y: 40 }}
                    animate = {{opacity : 1, y: 0}}
                    transition={{ duration:1, delay:0.3}}
                    >
                        {description}
                    </motion.div>
                </div>
            </div>
        );
}
export default Resume;