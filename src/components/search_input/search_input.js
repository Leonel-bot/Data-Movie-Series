import React, { useState } from 'react'
import './search_input.css'
import SearchIcon from '@material-ui/icons/Search';
import { getSearch } from '../../services/get_search';
import { indigo } from '@material-ui/core/colors';
import { Link } from 'react-router-dom';


export default function SearchInput(){

    const [results , setResults] = useState([]) 
    const [styleResult, setStyleResult] = useState({
        'display' : 'none'
    })

    const searchMovieAndSerie = (ev) => {
        var search = ev.target.value
        if (search !== '') {
            getSearch(search).then(res => {
                //console.log(res);
                setResults(res)
                setStyleResult({
                    'display' : 'flex'
                })
            })
        }else{
            setStyleResult({
                'display' : 'none'
            })
        }
    }



    return(
        <div>
            <form action="" className="search_form" onChange={searchMovieAndSerie}>
                <input type="text" name="" id="" placeholder="Busca peliculas y series"/>
                <button><SearchIcon/></button>
            </form>
            <div className="result_search" style={styleResult}>
                <ul>
                    {results.map((result) => (
                    <Link to={`/${result.id}/${result.media_type}`} key={result.id}>
                        <li key={result.id}>
                            <div className="result_search_poster" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w92${result.poster_path || result.profile_path})` }}></div>
                            <div>{result.original_title}{result.name}</div>
                        </li>
                    </Link>
                    ))}
                </ul>
            </div>
        </div>
    )
}