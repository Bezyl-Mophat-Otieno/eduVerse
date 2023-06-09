import Head from "next/head";
import Nav from "@/components/MainNav";
import Banner from "@/components/Banner";
import Services from "@/components/Services";
import Recommended from "@/components/Recommended";
import TutorDashNav from "@/components/TutorDashNav";
import MainNav from "@/components/MainNav";

export default function Home() {
  return (
    <div >
      <Head>
        <title>eduVerse-Home</title>
        <meta name="description" content="eduVerse" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainNav/>
      <Banner/>
      <Services/>
      <Recommended/>
    </div>
    
  );
}
