import React from 'react'
import styles from '../../../styles/TutorDashboard.module.css'
import TutorDashNav from '@/components/TutorDashNav'
import { useSelector } from 'react-redux'
import axios from 'axios'

import Videos from '../../../components/Videos'
import Recommended from '../../../components/Recommended'
import AddCourse from '@/components/AddCourse'
import {useState} from 'react'
import { trusted } from 'mongoose'
 

function index({data}) {
  const {currentUser} = useSelector(state=>state.user)
  const[closeAddCourseModal, setCloseAddCourseModal ]=useState(true);
  return (

    <div className={styles.background}> 
    <TutorDashNav setCloseAddCourseModal={setCloseAddCourseModal} user={currentUser}/>
    { !closeAddCourseModal && <AddCourse user={currentUser} setCloseAddCourseModal={setCloseAddCourseModal}/>}
    <Recommended data={data} title={'Recommended Tutorials from Students and Tutors from all walks of expertise'}/>


    </div>
    

  )
}

export default index

export const getServerSideProps = async (context) => {
  const myCookie = context.req?.cookies || "";
  if (myCookie.token !== process.env.ACCESS_TOKEN_SECRET) {
    return {
      redirect: {
        destination: "/login/tutor",
        permanent: false,
      },
    };
  }else{
    const allCourses = await axios.get('http://localhost:3000/api/courses')
    
    const myData = allCourses.data.map((course)=>{
      const allTutorials = []
      course.tutorials.map((tutorial)=>{
        allTutorials.push(tutorial)
      })
      return allTutorials
    })
    const myVideos = myData.flat();

    return {
      props:{
        token:myCookie.token,
        data:myVideos
      }
    }

  }
}

