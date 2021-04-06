import React, { useEffect, useRef, useState } from 'react'
import './media.css'
import CardMovie from '../../components/card_movie/card_movie';
import { getNowPlaying } from '../../services/get_now_playing';
import { getPopulars } from '../../services/get_populars';
import LinkPaginate from '../../components/link_paginate/link_paginate';
import Spinner from '../../components/spinner/spinner';
import { getForGenres } from '../../services/get_for_genres';

export default function Media(props) {

    const [page, setPage] = useState()
    const [results, setResults] = useState([])
    const [totalPages, setTotalPages] = useState()
    const [mediaResults, setMediaResults] = useState()

    const divResulRef = useRef(null)

    const searchForMediaType = () => {
        var mediaType = props.match.params.mediaType
        if (mediaType === 'movie') {
            setMediaResults(mediaType)
            getNowPlaying(page).then(res => {
                setResults(res.results)
                setTotalPages(res.total_pages)
                setPage(res.page)
            })
        }
        if (mediaType === 'tv') {
            setMediaResults(mediaType)
            getPopulars(mediaType, page).then(res => {
                setResults(res.results)
                setTotalPages(res.total_pages)
                setPage(res.page)
            })
        }
    }

    const searchForGenres = () => {
        var genresId = props.match.params.genres_id
        getForGenres()

    }






    const pageNext = () => {
        if (page < totalPages) {
            setPage(page + 1)
        }
    }

    const pageBefore = () => {
        if (page > 1) {
            setPage(page - 1)
        }
    }

    useEffect(() => {
        searchForMediaType()
        searchForGenres()
        window.scrollTo(0, 0)
    }, [props, page])


    return (
        <div>
            {results
            ? <>
                <div className="div_results" ref={divResulRef}>
                    <div className="results">
                        {results.map((result) => (
                            <CardMovie
                                key={result.id}
                                id={result.id}
                                mediaType={mediaResults}
                                original_title={result.original_title}
                                name_tv={result.name} //series
                                poster_path={result.poster_path}
                                release_date={result.release_date}
                                first_air_date={result.first_air_date} //series
                            />
                        ))}
                    </div>
                </div>
                <div>
                    {page &&
                        <LinkPaginate
                           page={page}
                           pageNext={pageNext}
                           pageBefore={pageBefore}
                        />
                    }
                </div>
            </>
            : <Spinner />
            }
        </div>
    )
}