
import type { NextPage } from "next"
import BackgroundLoader from "../components/BackgroundLoader"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Header from "../components/Header"
import { getHeroData } from "../lib/components/hero"
import { HeroData } from "../types"



const Page: NextPage = () => {
const heroData : HeroData = getHeroData();
  


  return (
    <>
      
      <Header />
      <Hero heroData={heroData} />
      
      <Footer  />
      
      <BackgroundLoader />
    </>
  )
}

export default Page
