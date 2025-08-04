import type { NextPage } from "next";
import Header from "../../components/Header";
import ServiceList from "../../components/ServiceList";
import Footer from "../../components/Footer";



const Page: NextPage = () => {
    
  return (
    <>
    <Header />
    <ServiceList />
    <Footer />
    </>
  )
}

export default Page