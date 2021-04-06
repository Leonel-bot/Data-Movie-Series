
export const getSearch = (name_search) => {
    return fetch(`https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&include_adult=false&query=${name_search}`)
    .then(res => res.json())
    .then(data => {
        return data.results
    })
}