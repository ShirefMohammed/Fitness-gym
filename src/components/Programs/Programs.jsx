import React from 'react'
import './programs.css'
import {programsData} from '../../data/programsData'
import RightArrow from '../../assets/rightArrow.png'

const Programs = () => {
    return (
        <div className='programs' id='programs'>
            <div className="programs-header">
                <span className='stroke-text'>explore our</span>
                <span>programs</span>
                <span className='stroke-text'>to shape you</span>
            </div>

            <div className="programs-categories">
                {
                    programsData.map((category, i) => {
                        return <div className="category" key={i}>
                            {category.image}
                            <span>{category.heading}</span>
                            <span>{category.details}</span>
                            <div className="join-now">
                                <span>Join Now</span>
                                <img src={RightArrow} alt='' />
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Programs
