import React from 'react'
import styles from '../../../styles/TutorDashboard.module.css'
import TutorDashNav from '@/components/TutorDashNav'
import { useSelector } from 'react-redux'

import Videos from '../../../components/Videos'
import Recommended from '../../../components/Recommended'
import Add from '@/components/AddCourse'
import {useState} from 'react'
import { trusted } from 'mongoose'
 

function index() {
  const {currentUser} = useSelector(state=>state.user)




  const[close , setClose ]=useState(true);
  return (

    <div className={styles.background}> 
    <TutorDashNav setClose={setClose} user={currentUser}/>
    { !close && <Add setClose={setClose}/>}
    <Recommended/>


    </div>
    

  )
}

export default index
