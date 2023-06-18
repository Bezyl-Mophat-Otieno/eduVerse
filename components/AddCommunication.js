import React from 'react'
import { useState , useEffect } from 'react'
import styles from '../styles/AddComm.module.css'
import Alert from './Alert'

function AddCommunication({setCloseAddCommsModal,courseId}) {
    const [message , setMessage] = useState('')
    const [error,setError] = useState(null)
    const [success,setSuccess] = useState(null)
    const handleCommunicate = (e)=>{
      e.preventDefault()
      const requestBody = {course:courseId,content:message}
      
      try {
        console.log(requestBody)
        const res = axios.post('http://localhost:3000/api/courses/comms',requestBody)
        setSuccess(true)
        setError(false)

        
      } catch (error) {
        console.log
        setSuccess(false)
        setError(true)
        
      }


    }
  return (
    <div>
      <div className={styles.container} >
      <div className={styles.wrapper}>
        <span onClick={() => setCloseAddCommsModal(true)} className={styles.close}>
          X
        </span>
        <h1 className={styles.title}>Communicate</h1>
        {success && <Alert message={"Message sent successfully ."}  color={"alert-success"}/>}
        {error && <Alert message={"Something went wrong , Message not sent"}  color={"alert-warning"}/>}
        <div className={styles.item}>
          <label className={styles.label}>Enter Message Content</label>
          <input
          className={styles.desc}
            rows={4}
            type="text"
            onChange={(e) =>setMessage(e.target.value)}
            placeholder="Message"
          />
        </div>
        { message &&( <button className='btn btn-primary mb-3 addCourse'  onClick={handleCommunicate} >
          SEND 
          </button>)}
        
      
    </div>
    </div>
    </div>
  )
}

export default AddCommunication
