import React, { useRef } from 'react'
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import './carousel_cards.css'

export default function CarouselCards({children}) {


    

    const carouselRef = useRef(null)

    const scroll = (ev) => {
        carouselRef.current.scrollLeft += 150
    }



    return (
        <div>
            <div className="carrousel_div">
                <div className="carousel_cards" ref={carouselRef}>
                    {children}
                </div>
                <div className="scroll_to">
                    <ArrowForwardIosRoundedIcon onClick={scroll} />
                </div>
            </div>
        </div>
    )
}