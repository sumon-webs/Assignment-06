import { useState } from 'react'
import './App.css'
import Banner from './Banner'
import Navbar from './cmponents/Navbar'
import Footer from './Footer'
import GetStarted from './getStarted'
import Pricing from './Pricing'
import RattingCard from './RattingCard'
import Tab from './Tab'
import WorkFlow from './WorkFlow'
import { ToastContainer } from 'react-toastify';

function App() {

  const [cartCount, setCartCount] = useState(0)

  return (
    <>
      <Navbar cartCount = {cartCount}/>
      <Banner />
      <RattingCard />
      <Tab  setCartCount = {setCartCount}/>
      <GetStarted />
      <Pricing />
      <WorkFlow />
      <ToastContainer />
    </>
  )
}

export default App
