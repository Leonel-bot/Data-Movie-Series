import { getGenres } from "./get_genres";

export const getForGenres = () => {
    
    return fetch(`https://api.themoviedb.org/3/movie/popular?api_key=cc575cf14a91bc9751466b4a81e25995&language=en-US&page=1`)
    .then(res => res.json())
    .then(data => {
        //data.results
    })
}