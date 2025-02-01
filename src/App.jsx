import './App.css'
import Profile from './components/Profile'
import Resume from './components/Resume'
import Selfinfo from './components/Selfinfo'
import Name from './components/Name'
import Info from './components/info'
import Social from './components/Social'

function App() {
  return (
    <div className='h-[100%] w-full bg-black'>
      <><Resume/></>
      <><Social/></>
      <><Profile/></>
      <><Name/></>
      <><Selfinfo/></>
      <><Info/></>
    </div>
  )
}

export default App
