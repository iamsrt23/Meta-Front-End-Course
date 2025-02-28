import React from 'react'
import Nav from './components/Nav'
import Promo from './components/promo'
import Intro1 from './components/Intro1'
import Intro2 from './components/Intro2'
import Intro3 from './components/Intro3'
import Footer from './components/Footer'




function Header(){
  return(
    <h1>Hello World</h1>
  )
}

const App = () => {
  return (
   <div>
     <Header />
     <Nav />
     <Promo />
     <Intro1 />
     <Intro2 />
     <Intro3 />
     <Footer />

   </div>
  )
}

export default App