import React from 'react'
import styles from '../../../styles/TutorDashboard.module.css'
import TutorDashNav from '@/components/TutorDashNav'
import Videos from '../../../components/Videos'
import Recommended from '../../../components/Recommended'


function index() {
  return (

    <div className={styles.background}> 
    <TutorDashNav/>
    <Recommended/>


    </div>
    

  )
}

export default index
