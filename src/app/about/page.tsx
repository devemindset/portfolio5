import type { NextPage } from "next";
import Header from "../../components/Header";
import About from "../../components/About";
import Footer from "../../components/Footer";
import BackgroundLoader from "../../components/BackgroundLoader";


const Page: NextPage = () => {
  return (
    <>
    <Header />
    <About />
    <Footer />
    <BackgroundLoader />
    </>
  )
}

export default Page