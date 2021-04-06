export const getUpcomingPoster = () => {
    return fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
    .then(res => res.json())
    .then(data => {
        console.log(data.results);

        var poster = data.results[0].poster_path
        return poster
    })
}