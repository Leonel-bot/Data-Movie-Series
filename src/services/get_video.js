export const getVideo = (id, media_type) => {
    return fetch(`https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
    .then(res => res.json())
    .then(data => {
        if (data.results) {
            return data.results[0];
        }
    })
}