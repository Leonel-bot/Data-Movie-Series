
export const getPopulars = (media_type , page) => {
    return fetch(`https://api.themoviedb.org/3/${media_type}/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`)
    .then(res => res.json())
    .then(data => {
        return data
    })
}