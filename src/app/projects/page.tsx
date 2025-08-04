import type { NextPage } from "next";
import Header from "../../components/Header";
import ProductList from "../../components/ProductList";
import Footer from "../../components/Footer";
import BackgroundLoader from "../../components/BackgroundLoader";



const Page: NextPage = () => {
    
  return (
    <>
    <Header />
    <ProductList />
    <Footer />
    <BackgroundLoader />
    </>
  )
}

export default Page