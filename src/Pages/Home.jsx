import React, { useEffect } from 'react'
import HeroSection from '../Components/HeroSection'
import Needs from '../Components/Needs'
import DemandJobs from '../Components/DemandJobs'
import Freelancers from '../Components/Freelancers'
import CompTrust from '../Components/CompTrust'
function Home() {
  useEffect(()=>{
      window.scrollTo(0, 0);
    },[])
  
  return (
    <>
    <HeroSection/>
    <Needs/>
    <DemandJobs/>
    <CompTrust/>
    <Freelancers/>
    </>
  )
}

export default Home