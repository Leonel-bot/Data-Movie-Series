
export const getGenres = () => {
    return fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=es-ES`)
    .then(res => res.json())
    .then( data => {
        return data.genres;
    })
}