import React, { useEffect, useState } from 'react'
import BannerHome from '../../components/banner_home/banner_home'
import CardMovie from '../../components/card_movie/card_movie'
import CarouselCards from '../../components/carousel_cards/carousel_cards'
import Filter from '../../components/filter/filter'
import Spinner from '../../components/spinner/spinner'
import { getPopulars } from '../../services/get_populars'
import { getTrendings } from '../../services/get_trendings'


export default function Home() {

    const [trendings, setTrendings] = useState([])//TRENDINGS
    const [mediaTypeTrending, setMediaTypeTrending] = useState('movie')//TRENDINGS

    const [populars, setPopulars] = useState([])
    const [mediaTypePopular, setMediaTypePopular] = useState('movie')



    const filterMediaTypePopular = (ev) => {
        setMediaTypePopular(ev.target.value)
    }


    const filterMediaTypeTrending = (ev) => {//TRENDINGS
        setMediaTypeTrending(ev.target.value)
    }



    useEffect(() => {
        //traigo todas las tendecinas dependiendo la media type
        getTrendings(mediaTypeTrending).then(res => {
            setTrendings(res)
        })
        getPopulars(mediaTypePopular).then(res => {
            setPopulars(res.results)
            //console.log(res);
        })
    }, [mediaTypeTrending, mediaTypePopular])


    return (
        <>
            {populars && trendings ?
                <div>
                    <BannerHome />
                    <div>
                        <Filter
                            filterMediaType={filterMediaTypeTrending}
                            filterTitle="Tendencias"
                            valueTxt1="Peliculas"
                            valueTxt2="Series"
                            value1="movie"
                            value2="tv"
                        />
                        <CarouselCards>
                            {trendings.map((trending) => (
                                <CardMovie
                                    key={trending.id}
                                    id={trending.id}
                                    mediaType={trending.media_type}
                                    original_title={trending.original_title}
                                    name_tv={trending.name} //series
                                    poster_path={trending.poster_path}
                                    release_date={trending.release_date}
                                    first_air_date={trending.first_air_date} //series
                                />
                            ))

                            }
                        </CarouselCards>
                    </div>
                    <div>
                        <Filter
                            filterMediaType={filterMediaTypePopular}
                            filterTitle="Populares"
                            valueTxt1="Peliculas"
                            valueTxt2="Series"
                            value1="movie"
                            value2="tv"
                        />
                        <CarouselCards>
                            {populars.map((popular) => (
                                <CardMovie
                                    key={popular.id}
                                    id={popular.id}
                                    mediaType={mediaTypePopular}
                                    original_title={popular.original_title}
                                    name_tv={popular.name} //series
                                    poster_path={popular.poster_path}
                                    release_date={popular.release_date}
                                    first_air_date={popular.first_air_date} //series
                                />
                            ))

                            }
                        </CarouselCards>
                    </div>
                </div>
                : <Spinner />

            }
        </>
    )
}