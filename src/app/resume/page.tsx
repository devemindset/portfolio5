import type { NextPage } from "next";
import Header from "../../components/Header";
import ResumeList from "../../components/ResumeList";
import Footer from "../../components/Footer";
import BackgroundLoader from "../../components/BackgroundLoader";




const Page: NextPage = () => {
    
  return (
    <>
    <Header />
    <ResumeList />
    <Footer />
    <BackgroundLoader />
    </>
  )
}

export default Page