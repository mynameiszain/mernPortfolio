import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Cards from '../components/Cards'
import Mycarousal from '../components/Mycarousal'

function Home() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Mycarousal />
      </div>
      <div>
      <Cards />
      </div>
      <div>
        <Footer />
      </div>
    </div>

  )
}

export default Home