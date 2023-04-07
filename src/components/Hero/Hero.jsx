import React from 'react'
import './Hero.css'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import heart from '../../assets/heart.png'
import calories from '../../assets/calories.png'
import Header from '../Header/Header'
import { motion } from 'framer-motion'
import NumberCounter from 'number-counter'

const Hero = () => {
    const transition = { type: 'spring', duration: 3 }
    const caloriesRight1 = window.innerWidth < 768 ? '8rem' : '36rem';
    const caloriesRight2 = window.innerWidth < 768 ? '4rem' : '32rem';

    return (
        <div className='hero' id='home'>
            <div className='blur hero-blur'></div>

            <div className="left-h">
                <Header />

                {/* the Best Ad */}
                <div className="the-best-ad">
                    <motion.div
                        initial={{ left: '238px' }}
                        whileInView={{ left: '8px' }}
                        transition={{ ...transition, type: 'tween' }}
                    ></motion.div>
                    <span>the best fitness club in the town</span>
                </div>

                {/* Hero Heading */}
                <div className="hero-text">
                    <div>
                        <span className='stroke-text'>shape</span>
                        <span>your</span>
                    </div>
                    <div>
                        <span>ideal body</span>
                    </div>
                    <div>
                        <span>
                            In here we will help you to shape and build your ideal body and live up your life to fullest
                        </span>
                    </div>
                </div>

                {/* Figures */}
                <div className="figures">
                    <div>
                        <span>
                            <NumberCounter start={100} end={140} preFix="+" delay='4' />
                        </span>
                        <span>expert coaches</span>
                    </div>
                    <div>
                        <span>
                            <NumberCounter start={800} end={978} preFix="+" delay='4' />

                        </span>
                        <span>members joined</span>
                    </div>
                    <div>
                        <span>
                            <NumberCounter start={0} end={50} preFix="+" delay='4' />
                        </span>
                        <span>fitness programs</span>
                    </div>
                </div>

                {/* Hero buttons */}
                <div className="hero-buttons">
                    <button className="btn">Get Started</button>
                    <button className="btn">Learn More</button>
                </div>
            </div>

            <div className="right-h">
                {/* btn */}
                <button className='btn'>join now</button>

                {/* Heart-rate */}
                <motion.div className="heart-rate"
                    initial={{ right: '-1rem' }}
                    whileInView={{ right: '4rem' }}
                    transition={transition}
                >
                    <img src={heart} alt='' />
                    <span>Heart Rate</span>
                    <span>116 bpm</span>
                </motion.div>

                {/* Hero images */}
                <img src={hero_image} alt='' className='hero-image' />
                <motion.img
                    initial={{ right: '10rem' }}
                    whileInView={{ right: '20rem' }}
                    transition={transition}
                    src={hero_image_back} alt='' className='hero-image-back' />

                {/* calories */}
                <motion.div className="calories"
                    initial={{ right: caloriesRight1 }}
                    whileInView={{ right: caloriesRight2 }}
                    transition={transition}
                >
                    <img src={calories} alt='' />
                    <div>
                        <span>Calories burned</span>
                        <span>220 kcal</span>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Hero
