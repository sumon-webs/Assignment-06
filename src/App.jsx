import './App.css'
import Banner from './Banner'
import Navbar from './cmponents/Navbar'
import GetStarted from './getStarted'
import Pricing from './Pricing'
import RattingCard from './RattingCard'
import Tab from './Tab'
import WorkFlow from './WorkFlow'

function App() {
  return (
    <>
      <Navbar/>
      <Banner/>
      <RattingCard/>
      <Tab/>
      <GetStarted/>
      <Pricing/>
      <WorkFlow/>
    </>
  )
}

export default App
