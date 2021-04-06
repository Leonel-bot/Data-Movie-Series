export const getNowPlaying = (page) => {
    return fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`)
    .then(res => res.json())
    .then(data => {
        return data
    })
}