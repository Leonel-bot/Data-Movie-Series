import React from 'react'
import './vote_average.css'
import ThumbUpAltRoundedIcon from '@material-ui/icons/ThumbUpAltRounded';


export default function VoteAverage(){
    return(
        <div className="vote_average">
            <ThumbUpAltRoundedIcon/>
            <p>
                85%
            </p>
        </div>
    )
}