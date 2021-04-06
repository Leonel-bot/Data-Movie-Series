import React, { useEffect, useState } from 'react'
import { getUpcomingPoster } from '../../services/get_upcoming_poster'
import SearchInput from '../search_input/search_input'
import './banner_home.css'

export default function BannerHome(){

    const [ poster , setPoster] = useState()

    useEffect(() => {
        getUpcomingPoster().then(res => {
            setPoster(res)
        })
    },[])



    return(
        <div className="banner_home">
            <div className="banner" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${poster})` }}>
                <div className="banner_filter_color">
                    <div className="banner_txt">
                        <h2>
                            Data Movie & Series
                        </h2>
                        <h4>
                            Descubre miles de peliculas y series
                        </h4>
                    </div>
                   <div>
                       <SearchInput/>
                   </div>
                </div>
            </div>
        </div>
    )
}

