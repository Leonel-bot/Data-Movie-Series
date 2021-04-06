import React, { useEffect, useState } from 'react'
import IframeTrailer from '../../components/iframe_trailer/iframe_trailer'
import Spinner from '../../components/spinner/spinner'
import { getDetails } from '../../services/get_details'
import { getVideo } from '../../services/get_video'
import './show.css'
import PlayOnSite from '../../components/play_on_site/play_on_site';
import VoteAverage from '../../components/vote_average/vote_average'
import { getCast } from '../../services/get_cast'
import Cast from '../../components/cast/cast'

export default function Show(props) {

    const [show, setShow] = useState(null)
    const [widthPoster, setWidthPoster] = useState('w500')
    const [trailer, setTrailer] = useState(null)

    const { match } = props
    var id = match.params.id
    var mediaType = match.params.mediaType



    const formatTimeStamp = (show) => {
        if (show.release_date) {
            return show.release_date.slice(0, 4)
        }
        if (show.first_air_date) {
            return show.first_air_date.slice(0, 4)
        }
    }


    const selectedWidthPoster = () => {

        if (window.screen.availWidth < 500) {
            setWidthPoster('w780')
        }
        if (window.screen.availWidth > 768) {
            setWidthPoster('original')
        }
    }


    useEffect(() => {
        window.scrollTo(0, 0)
        getVideo(id, mediaType).then(res => {
            if (res) {
                //console.log(res);
                setTrailer(res.key)
            }
        })
        selectedWidthPoster()
        getVideo(id, mediaType)
        getDetails(id, mediaType).then(res => {
            setShow(res)
            //console.log(res);
        })
        getCast(id, mediaType)
    }, [])


    return (
        <div>
            {show ? 
                <div className="show">
                    <div className="show_poster" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/${widthPoster}/${show.backdrop_path})` }}>
                        <div className="show_filter_color">
                            <div className="show_content">
                                <div className="show_space">
                                    <PlayOnSite
                                      link = {show.homepage}
                                    />
                                </div>
                                <div className="show_data">
                                    <div className="title_time">
                                        <h2 id="original_title">
                                            {show.original_title} {show.original_name}
                                        </h2>
                                        <p id="time_stamp">
                                            ( {formatTimeStamp(show)} )
                                        </p>
                                    </div>
                                    <ul id="genres">
                                        {show.genres.map((genre) => (
                                            <li key={genre.id}>{genre.name}</li>
                                        ))
                                        }
                                    </ul>
                                    {show.seasons && 
                                       <div id="seasons">
                                           <p>Temporada {show.seasons.length}</p>
                                        </div>
                                    }
                                    <div id="overview">
                                        <p>{show.overview}</p>
                                    </div>
                                    <div id="trailer">
                                        {
                                            trailer &&
                                            <>
                                                <IframeTrailer
                                                    path={`https://www.youtube.com/embed/${trailer}`}
                                                />
                                            </>
                                        }
                                    </div>
                                    <Cast
                                        id = {id}
                                        mediaType = {mediaType}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                : <Spinner/>
            }
        </div>
    )
}