
export const getTrendings = (media_type) => {
    return fetch(`https://api.themoviedb.org/3/trending/${media_type}/day?api_key=${process.env.REACT_APP_API_KEY}`)
    .then(res => res.json())
    .then(data => {
        //console.log(data.results);
        return data.results
    })
}