import React from 'react'
import styles from '../../../styles/TutorDashboard.module.css'
import TutorDashNav from '@/components/TutorDashNav'
import Videos from '../../../components/Videos'
import Recommended from '../../../components/Recommended'
import Add from '@/components/AddCourse'
import {useState} from 'react'
import { trusted } from 'mongoose'
 

function index() {
  const[close , setClose ]=useState(true);
  return (

    <div className={styles.background}> 
    <TutorDashNav setClose={setClose}/>
    { !close && <Add setClose={setClose}/>}
    <Recommended/>


    </div>
    

  )
}

export default index
