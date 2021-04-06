import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getDetails } from '../../services/get_details'
import './card_movie.css'


export default function CardMovie({ original_title, name_tv, first_air_date, id, mediaType, poster_path , release_date}) {




    return (
        <div className="card_movie" key={id}>
            <Link to={`/${id}/${mediaType}`}>
                <div className="div_movie_poster">
                    <div className="movie_poster" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w342/${poster_path})` }}></div>
                </div>
                <div className="txt_card_movie">
                    <p className="title_card_movie">
                        {original_title} {name_tv}
                    </p>
                    <p className="card_time_stamp">
                        {release_date} {first_air_date}
                    </p>
                </div>
            </Link>
        </div>
    )
}