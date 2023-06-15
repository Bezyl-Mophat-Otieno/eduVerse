import { useState } from "react";
import styles from "../styles/AddPublication.module.css";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Alert from "./Alert";
import app from "@/utils/firebase";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";


const AddPublication = ({ setCloseAddPubModal , courseId}) => {
  const [title, setTitle] = useState(null);
  const [filePerc , setfilePerc] = useState(0)
  const [fileUrl , setfileUrl] = useState("")
  const [success,setSuccess] = useState(null)
  const [error,setError] = useState(null)
  const [doc,setDoc] = useState(null)

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
    doc && uploadFile(doc,"fileUrl");
  }, [doc]); 

  const handleCreate = async (e)=>{
    e.preventDefault();
    const id = courseId
    const url = fileUrl
    const publications = {
      title,url
    }
    const requestBody = {id,publications}
    try {
      await axios.post(`http://localhost:3000/api/courses/publications`, requestBody)
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
        <span onClick={() => setCloseAddPubModal(true)} className={styles.close}>
          X
        </span>
        
        <h1 className={styles.title}>Add Publications</h1>
        {success && <Alert message={"Notes Added Successfully ."}  color={"alert-success"}/>}
        {error && <Alert message={"Something went wrong , Notes not added ."}  color={"alert-warning"}/>}
        <hr/>
        <div className={styles.item}>
          <label className={styles.label}>Enter Publication  Title</label>
          <input 
            className={styles.input}
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter Course Title"
          />
        </div>

       
        <div className={styles.item}>
          <label className={styles.label}>Add File </label>
          <input type="file" accept='.doc, .docx, .pdf, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/pdf' className={styles.choose} onChange={(e) => setDoc(e.target.files[0])} />
        </div>
              { doc && <button className='btn btn-dark  mb-3' >
              {filePerc}%
              </button>}

              { doc ? (
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

export default AddPublication;