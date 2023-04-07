import React from 'react'
import './plans.css'
import {plansData} from '../../data/plansData'
import whiteTick from '../../assets/whiteTick.png'
import RightArrow from '../../assets/rightArrow.png'

const Plans = () => {
    return (
        <div className='plans' id='plans'>
            <div className="blur plans-blur"></div>
            <div className="blur plans-blur"></div>
            <div className="plans-header">
                <span className='stroke-text'>ready to start</span>
                <span>your journey</span>
                <span className='stroke-text'>now with us</span>
            </div>

            {/* Plan Cards */}
            <div className="cards">
                {
                    plansData.map((card, i) => {
                        return (<div className='card' key={i}>

                            {card.icon}

                            <span>{card.name}</span>

                            <span>${card.price}</span>

                            <div className='features'>
                                {
                                    card.features.map((item, i) => {
                                        return <div key={i}>
                                            <img src={whiteTick} alt='' />
                                            <span>{item}</span>
                                        </div>;
                                    })
                                }
                            </div>

                            <div className='see-more'>
                                <span>See more benefits</span>
                                <img src={RightArrow} alt='' />
                            </div>
                            
                            <button>join now</button>
                        </div>);
                    })
                }
            </div>
        </div>
    )
}

export default Plans
