import React from 'react'
import './Banner.css'
import { useEffect } from 'react'
import axios from '../../axios'
import { API_KEY,imageUrl } from '../../constants/constants'
import { useState } from 'react'
const Banner = () => {
  const [movie, setMovie] = useState()
  useEffect(()=>{
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      let num1 = Math.floor(Math.random() * 10) + 1;
      console.log(response.data.results[0])
      setMovie(response.data.results[num1])
    })
  }, [])
  return (

    <div style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ""})`}} 
    className='banner'> 
        <div className='content'>
            <h1 className='title'>{movie ? movie.title : ""}</h1>
            <div className='banner_buttons'>
                <button className='button'>Play</button>
                <button className='button'>My List</button>
            </div>
            <h1 className='description'>{movie ? movie.overview : ""}</h1>
        </div>
        <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner