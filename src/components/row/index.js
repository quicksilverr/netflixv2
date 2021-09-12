import axios from "../../Api/axios"
import React, { useEffect, useState } from 'react'
import './style.css'

const Classnames = {
    Row: "row"
}

export const Row = ({
    title,fetchUrl,largeRowSize
}) => {

    const [movie, setMovie] = useState([])
    const base_url = 'https://image.tmdb.org/t/p/original/'

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl)
            setMovie(request.data.results)
            return request
        }
        fetchData()
    }, [])
    return (
        <div className={Classnames.Row}>
            <h2>{title}</h2>
            {
                movie.map(movie => (
                    <img src={`${base_url}${largeRowSize ? movie.poster_path : movie.backdrop_path}`} alt={movie.name}/>
                ))
            }
        </div>
    )
}
