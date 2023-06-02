import Head from "next/head";
import Nav from "@/components/Nav";
import Banner from "@/components/Banner";
import Services from "@/components/Services";
import Recommended from "@/components/Recommended";
export default function Home() {
  return (
    <div >
      <Head>
        <title>eduVerse-Home</title>
        <meta name="description" content="eduVerse" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav/>
      <Banner/>
      <Services/>
      <Recommended/>
    </div>
    
  );
}
