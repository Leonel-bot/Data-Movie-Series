export const getCast = (id, mediaType) => {
    return fetch(`https://api.themoviedb.org/3/${mediaType}/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=es-ES`)
    .then(res => res.json())
    .then(doc => {
        return doc.cast;
    })
}