import { useState } from "react";
import styles from "../styles/AddTutorial.module.css";
import axios from "axios";
import { useEffect } from "react";
import Alert from "./Alert";
import app from "@/utils/firebase";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";


const AddTutorial = ({ setcloseAddTutorialModal , courseId}) => {
  const [filePerc , setfilePerc] = useState(0)
  const [fileUrl , setFileUrl] = useState("")
  const [video , setVideo] = useState("")
  const [success,setSuccess] = useState(null)
  const [error,setError] = useState(null)
  const [videoLanguage,setVideoLanguage] = useState(null)
  const [videoTitle,setVideoTitle] = useState(null)

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
        urlType === "videoUrl" && setfilePerc(Math.round(progress));
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
      // Handling error
      (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setFileUrl(downloadURL);
        });
      }
    );
  };

  useEffect(() => {
    video && uploadFile(video , "videoUrl");
  }, [video]); 

  const handleCreate = async (e)=>{
    e.preventDefault();
    const id = courseId
    const language = videoLanguage
    const title = videoTitle
    const url = fileUrl

    const tutorials = {title,language,url}
    const requestBody = {id,tutorials}
    
    try {
      await axios.post(`http://localhost:3000/api/courses/tutorials/addtutorial`, requestBody)
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
    <span onClick={() => setcloseAddTutorialModal(true)} className={styles.close}>
      X
    </span>
    
    <h1 className={styles.title}>Add Video Tutorials</h1>
      {success && <Alert message={"Video Tutorial  Added Successfully ."}  color={"alert-success"}/>}
      {error && <Alert message={"Something went wrong , Video Tutorial not added ."}  color={"alert-warning"}/>}
    <hr/>
    <div className={styles.item}>
      <label className={styles.label}>Video Title</label>
      <input 
         className={styles.input}
         type="text"
         onChange={(e) => setVideoTitle(e.target.value)}
      />
    </div>
    <div className={styles.item}>
      <label className={styles.label}>Video Language</label>
      <input 
         className={styles.input}
         type="text"
         onChange={(e) => setVideoLanguage(e.target.value)}
      />
    </div>

   
    <div className={styles.item}>
      <label className={styles.label}>Add File </label>
      <input type="file" accept='video/*' className={styles.choose} onChange={(e) => setVideo(e.target.files[0])} />
    </div>
          { video && <button className='btn btn-dark  mb-3' >
          {filePerc}%
          </button>}

          { video ? (
            filePerc === 100 ? (
                  <button className='btn btn-primary mb-3 addCourse'  onClick={handleCreate} >
                 Add
                  </button>
            ):(
                  <button className='btn btn-primary mb-3 addCourse' disabled onClick={handleCreate} >
                 Add
                  </button>
            )):(  <button className='btn btn-primary mb-3 addCourse'  onClick={handleCreate} >
                 Add
                  </button>)
          }
 
  </div>
</div>

  );
};

export default AddTutorial;
