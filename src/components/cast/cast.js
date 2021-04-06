import React, { useEffect, useState } from 'react'
import { getCast } from '../../services/get_cast'
import './cast.css'

export default function Cast({ id, mediaType }) {

    const [casts, setCasts] = useState([])

    useEffect(() => {
        getCast(id, mediaType)
            .then(res => {
                //console.log(res)
                setCasts(res)
            })
    }, [])

    return (
        <div>
            {casts &&
                <div className="div_cast">
                    <div className="cast_title">
                        <p>Reparto</p>
                    </div>
                    <div className="cast">
                        {casts.slice(0, 10).map((cast) => (
                            <div className="cast_card" key={cast.cast_id}>
                                <div className="cast_picture" style={{ background: `url(https://image.tmdb.org/t/p/w92/${cast.profile_path})`, backgroundSize: 'cover' }}></div>
                                <div className="cast_name">
                                    <p>{cast.name}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            }
        </div>
    )
}