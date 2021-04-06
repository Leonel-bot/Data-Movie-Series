import React, { useEffect } from 'react'
import PlayCircle from '@material-ui/icons/PlayCircleFilledWhiteOutlined';
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function PlayOnSite({link}){
    
    useEffect(() => {
        AOS.init({
            delay: 1000,
            duration: 500, 
            easing: 'ease'
        });
    })
    return(
        <div>
            <a href={link}>
               <PlayCircle data-aos="zoom-in"/>
            </a>
        </div>
    )
}