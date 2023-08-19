import React from 'react';
import './Programs.css';
import {programsData} from '../../data/programsData' //named export
import RightArrow from '../../assets/rightArrow.png' //default export
function Programs() {
  return (
    <div className="Programs" id="programs">
        {/* header */}
        <div className="programs-header">
            <span  className="stroke-text">Explore</span>
            <span>Programs</span>
            <span className="stroke-text">To Shape you</span>
        </div>
        <div className="program-categories">
            {programsData.map((program)=>(
                <div className="category" key={program.heading}>
                    {program.image}
                    <span>{program.heading}</span>
                    <span>{program.details}</span>
                    <div className="join-now"><span>Join Now <img src={RightArrow} alt="" /></span></div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Programs