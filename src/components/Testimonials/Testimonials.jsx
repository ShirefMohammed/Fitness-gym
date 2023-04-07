import React, {useState} from 'react'
import './Testimonials.css'
import { testimonialsData } from '../../data/testimonialsData'
import RightArrow from '../../assets/rightArrow.png'
import LeftArrow from '../../assets/leftArrow.png'
import { motion } from 'framer-motion'

const Testimonials = () => {
    const [number, setNumber] = useState(0);
    const length = testimonialsData.length
    const transition = {type: 'spring', duration: 3}

    return (
        <div className='testimonials' id='testimonials'>
            <div className="left-t">
                <div>
                    <span>testimonials</span>
                </div>

                <div>
                    <span className='stroke-text'>what they</span>
                </div>

                <div>
                    <span>say about us</span>
                </div>

                <motion.span
                key={number}
                initial={{opacity: 0, x: -100}}
                animate={{opacity: 1, x: 0}}
                exit={{opacity: 0, x: 100}}
                transition={transition}
                >{testimonialsData[number].review}
                </motion.span>

                <span>
                    {testimonialsData[number].name}
                    <span> - {testimonialsData[number].status}</span>
                </span>
                
                
                
            </div>

            <div className="right-t">
                <div className='image'>
                    <motion.div
                    initial={{opacity: 0, x: 100}}                                                                            
                    whileInView={{opacity: 1, x: 0}} 
                    transition={{...transition, duration: 2}}                                                                           
                    ></motion.div>
                    <motion.div
                    initial={{opacity: 0, x: -100}}                                                                            
                    whileInView={{opacity: 1, x: 0}} 
                    transition={{...transition, duration: 2}}    
                    ></motion.div>
                    {
                        <motion.img 
                        key={number}
                        initial={{opacity: 0, x: 100}}
                        animate={{opacity: 1, x: 0}}
                        exit={{opacity: 0, x: -100}}
                        transition={transition}
                        src={testimonialsData[number].image} alt='' />
                    }
                </div>

                <div className="arrows">
                    <img 
                        onClick={
                            () => 
                                {
                                    number === length - 1 ? setNumber(0) : setNumber(num => num + 1)
                                }                          
                        }
                        src={LeftArrow} 
                        alt="" />

                    <img 
                        onClick={
                            () => 
                                {
                                    
                                    number === 0 ? setNumber(length - 1) : setNumber(num => num - 1)                          
                                }
                        }
                        src={RightArrow} 
                        alt="" />
                </div>
            </div>
        </div>
    )
}

export default Testimonials
