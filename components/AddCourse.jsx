import { useState } from "react";
import styles from "../styles/Add.module.css";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Alert from "./Alert";
// import app from '../utils/firebase'
// import {
//   getStorage,
//   ref,
//   uploadBytesResumable,
//   getDownloadURL,
// } from "firebase/storage";


const AddCourse = ({ setClose }) => {
  const [video, setVideo] = useState(null);
  const [title, setTitle] = useState(null);
  const [desc, setDesc] = useState(null);
  const [content, setContent] = useState(null)
  const [videoPerc , setVideoPerc] = useState(0)
  const [videoUrl , setVideoUrl] = useState("")
  const [success,setSuccess] = useState(null)
  const [error,setError] = useState(null)

  // const uploadFile = (file, urlType) => {
  //   const storage = getStorage(app);
  //   const fileName = new Date().getTime() + file.name;
  //   const storageRef = ref(storage, fileName);
  //   const uploadTask = uploadBytesResumable(storageRef, file);
    

  //   uploadTask.on(
  //     "state_changed",
  //     (snapshot) => {
  //       const progress =
  //         (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //       urlType === "videoUrl" && setVideoPerc(Math.round(progress));
  //       switch (snapshot.state) {
  //         case "paused":
  //           console.log("Upload is paused");
  //           break;
  //         case "running":
  //           console.log("Upload is running");
  //           break;
  //         default:
  //           break;
  //       }
  //     },
  //     (error) => {},
  //     () => {
  //       getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
  //         setVideoUrl(downloadURL);
  //       });
  //     }
  //   );
  // };

  useEffect(() => {
    video && uploadFile(video , "videoUrl");
  }, [video]);



  const handleCreate = async (e)=>{
    e.preventDefault();
    const requestBody = {title,desc,content,tutorials:videoUrl}
    try {
      const res = await axios.post("http://localhost:3000/api/courses", requestBody)
      console.log(res)
      setSuccess(true)
      
    } catch (error) {
      setError(true)
      console.log(error)
      
    }
 
  }

  return (
    <div className={styles.container}>
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
          <label className={styles.label}>Enter Course Description</label>
          <input
          className={styles.desc}
            type="text"
            onChange={(e) => setDesc(e.target.value)}
            placeholder="Enter Course Description..."
          />
        </div>

        <div className={styles.item}>
          <label className={styles.label}>Enter Course Content</label>
          <textarea
          className={styles.desc}


            rows={4}
            type="text"
            onChange={(e) => setContent(e.target.value)}
            placeholder="Enter Course Content"
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Add Course Tutorials</label>
          <input type="file" accept='video/*' className={styles.choose} onChange={(e) => setVideo(e.target.files[0])} />
        </div>
        <button className='btn btn-primary ' onClick={handleCreate}>
          Create Course
        </button>
      </div>
    </div>
  );
};

export default AddCourse;