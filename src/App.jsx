import './App.css'
import Navbar from './components/Navbar'
import Resume from './components/Resume'
import Context from './components/Context'
import Name from './components/Name'
import Info from './components/info'
import Social from './components/Social'
import NameProject from './components/NameProject'

function App() {
  return (
    <div className='h-[100%] w-full bg-black'>
      <><Resume/></>
      <><Social/></>
      <><Navbar/></>
      <><Name/></>
      <><Context/></>
      {/* <><NameProject/></> */}
      <><Info/></>
    </div>
  )
}

export default App
