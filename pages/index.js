import Head from "next/head";
import Nav from "@/components/MainNav";
import Banner from "@/components/Banner";
import Services from "@/components/Services";
import Recommended from "@/components/Recommended";
import TutorDashNav from "@/components/TutorDashNav";
import MainNav from "@/components/MainNav";
import { useSelector } from "react-redux";

export default function Home() {
const {currentUser} = useSelector(state=>state.user)
  return (
    <div >
      <Head>
        <title>eduVerse-Home</title>
        <meta name="description" content="eduVerse" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainNav user={currentUser}/>
      <Banner user={currentUser} />
      <Services/>
      {/* <Recommended/> */}
    </div>
    
  );
}
