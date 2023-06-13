import React from 'react'
import styles from '../../../styles/TutorDashboard.module.css'
import TutorDashNav from '@/components/TutorDashNav'
import { useSelector } from 'react-redux'

import Videos from '../../../components/Videos'
import Recommended from '../../../components/Recommended'
import AddCourse from '@/components/AddCourse'
import {useState} from 'react'
import { trusted } from 'mongoose'
 

function index() {
  const {currentUser} = useSelector(state=>state.user)
  const[close , setClose ]=useState(true);
  return (

    <div className={styles.background}> 
    <TutorDashNav setClose={setClose} user={currentUser}/>
    { !close && <AddCourse user={currentUser} setClose={setClose}/>}
    <Recommended/>


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

    return {
      props:{
        token:myCookie.token
      }
    }

  }
}

