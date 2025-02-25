import React, { useState } from 'react'
import './RowPost.css'
import{imageUrl,API_KEY} from '../../constants/constants'
import { useEffect } from 'react'
import axios from '../../axios'
import YouTube from 'react-youtube'
const RowPost = (props) => {
  const [movies, setmovies] = useState([])
  const [urlId,setUrlId] = useState('')
  useEffect(() => {
    axios.get(props.url).then(response=>{
      console.log(response.data)
      setmovies(response.data.results)
      console.log("Hello world")
    }).catch(err=>{
      alert('Network Error')
    })
  },[])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };
  const handleMovie = (id) =>
  {
console.log("MOVIE:",id)
axios.get(`/movie/${id}/videos?api_key=${API_KEY}`).then(response=>{
  if(response.data.results.length !== 0){
  setUrlId(response.data.results[0])
  }
  })
}

  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
          {movies.map((obj)=>
            <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallPoster' : 'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="poster" />

          )}
           
        </div>
        {urlId && <YouTube videoId={urlId.key} opts={opts} />}
    </div>
  )
}

export default RowPost