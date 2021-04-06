import React from 'react'
import './iframe_trailer.css'

export default function IframeTrailer({path}){

    
    return(
        <div id="iframe">
            <p>Trailer</p>
            <iframe 
               src= {path}
               frameborder="0" 
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
               allowfullscreen>
            </iframe>
        </div>
    )
}