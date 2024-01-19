import React from 'react'
import { Helmet } from 'react-helmet-async'
import Header from '../../components/HomepageComp/HeaderSec'
import OurShef from '../../components/HomepageComp/OurShef'
import Discover from '../../components/HomepageComp/Discover'

const HomePage = () => {
  return (
    <>
    <Helmet>
       <title>home</title>
      
     </Helmet>
     <Header/>
     <OurShef/>
     <Discover/>
   </>
  )
}

export default HomePage