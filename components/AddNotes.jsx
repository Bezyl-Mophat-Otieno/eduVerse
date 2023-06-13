import { useState } from "react";
import styles from "../styles/Add.module.css";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Alert from "./Alert";
import app from '../utils/firebase'
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";


const AddNotes = ({ setClose , courseId}) => {
  const [title, setTitle] = useState(null);
  const [filePerc , setfilePerc] = useState(0)
  const [fileUrl , setfileUrl] = useState("")
  const [success,setSuccess] = useState(null)
  const [error,setError] = useState(null)

  const uploadFile = (file, urlType) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);
    

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        urlType === "fileUrl" && setfilePerc(Math.round(progress));
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
            break;
        }
      },
      (error) => {},
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setfileUrl(downloadURL);
        });
      }
    );
  };

  useEffect(() => {
    fileUrl && uploadFile(video , "fileUrl");
  }, [fileUrl]); 

  const demoUrl = 'http://test.com'

  const handleCreate = async (e)=>{
    e.preventDefault();
    const requestBody = {title,publications:demoUrl}
    try {
      const res = await axios.put(`http://localhost:3000/api/courses/${courseId}`, requestBody)
      setSuccess(true)
      setError(false)
    } catch (error) {
      setError(true)
      setSuccess(false)
      console.log(error)

    }
 
  }
  return (
    <div className={styles.container} >
      <div className={styles.wrapper}>
        <span onClick={() => setClose(true)} className={styles.close}>
          X
        </span>
        
        <h1 className={styles.title}>Add Course</h1>
        {success && <Alert message={"Course Added Successfully ."}  color={"alert-success"}/>}
        {error && <Alert message={"Something went wrong , Course not added ."}  color={"alert-warning"}/>}
        <hr/>
        <div className={styles.item}>
          <label className={styles.label}>Enter Course Title</label>
          <input 
            className={styles.input}
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter Course Title"
          />
        </div>
       
        <div className={styles.item}>
          <label className={styles.label}>Add Course Notes </label>
          <input type="file" accept='pdf/*' className={styles.choose} onChange={(e) => setFile(e.target.files)} />
        </div>
              { video && <button className='btn btn-dark  mb-3' >
              {filePerc}%
              </button>}

              { video ? (
                filePerc === 100 ? (
                      <button className='btn btn-primary mb-3 addCourse'  onClick={handleCreate} >
                      Create Course
                      </button>
                ):(
                      <button className='btn btn-primary mb-3 addCourse' disabled onClick={handleCreate} >
                      Create Course
                      </button>
                )):(  <button className='btn btn-primary mb-3 addCourse'  onClick={handleCreate} >
                      Create Course
                      </button>)
              }
     
      </div>
    </div>
  );
};

export default AddNotes;