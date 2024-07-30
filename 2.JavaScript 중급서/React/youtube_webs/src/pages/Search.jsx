import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Main from '../components/section/Main'

import VideoSearch from '../components/video/VideoSearch'
import { fetchFromAPI } from '../utils/api'

const Search = () => {
  const { searchId } = useParams();
  const [ videos, setVideos ] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchId}`)
      .then((data) => {
        console.log(data)
        setVideos(data.items)
      })
  }, [searchId]);

  return (
    <Main 
      title = "유투브 검색"
      description="유튜브 검색 결과 페이지입니다.">
      
      <section id='searchPage'>
        <div className="video__inner search">
          <VideoSearch videos={videos} />
        </div>
      </section>
    </Main>
  )
}

export default Search