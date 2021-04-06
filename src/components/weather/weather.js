import React, { useEffect, useLayoutEffect, useState } from 'react'


export default function Weather(){


    useEffect(()=>{
        getDataWeather()
    },[])


    

    
    
    const getDataWeather = () => {
        navigator.geolocation.getCurrentPosition(position => {
            console.log(position);
            var lat = position.coords.latitude
            var lon = position.coords.longitude
            const key = '219aefa118e1444d51bdcff6395e545a'
            const api = `http://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${lon}&appid=${key}`
            fetch(api).then(response => response.json())
            .then(data => {
                console.log(data);
            })
        })
    }








    return(
        <div>

        </div>
    )
}