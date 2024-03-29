import React from 'react'
import './TrendCard.css'

import {TrendData} from '../../Data/TrendData.js'
const TrendCard = () => {
  return (
    <div className="TrendCard">
            <h3>Music Events:</h3>
            {TrendData.map((trend)=>{
                return(
                    <div className="trend">
                        <span>{trend.name}</span>
                        <span>{trend.location}</span>
                    </div>
                )
            })}

    </div>
  )
}

export default TrendCard