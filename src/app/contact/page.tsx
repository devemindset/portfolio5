import type { NextPage } from "next";
import Header from "../../components/Header";
import ContactForm from "../../components/ContactForm";
import Footer from "../../components/Footer";
import BackgroundLoader from "../../components/BackgroundLoader";
import Contact from "../../components/Contact";




const Page: NextPage = () => {
    
    
  return (
    <>
    <Header />
    <Contact />
    <ContactForm />
    <Footer />
    <BackgroundLoader />
    </>
  )
}

export default Page