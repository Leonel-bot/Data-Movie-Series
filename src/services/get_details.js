export const getDetails = (id , media_type) => {
    return fetch(`https://api.themoviedb.org/3/${media_type}/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=es-ES`)
    .then(res => res.json())
    .then(doc => {
        return doc
    })
}    
