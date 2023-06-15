import React from 'react'
import VideoCard from '@/components/VideoCard'
import axios from 'axios'
import MainNav from '@/components/MainNav'

function VideoTutorials({tutorials}) {
  return (

    <div className='container'>
    <MainNav/>
     <div className={'d-flex justify-content-between' }>

      {
        tutorials.map((video)=>(
            <div className={'g-5 mt-5 '}>

            <VideoCard video={video} /> 
            </div>
        ))
      }
     </div>
    </div>
  )
}

export default VideoTutorials

export const getServerSideProps = async ({params}) => {

    try {
        const res = await axios.get(`http://localhost:3000/api/courses/${params.id}`)
        return {
          props:{
            tutorials:res.data.tutorials
          }
        }
        
    } catch (error) {
        console.log(error.message)
        
    }

  
  
  }
