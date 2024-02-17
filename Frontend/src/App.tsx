import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './component/Home/Home'
import './App.css'
import About from './component/About/About'
import Blog from './component/Blog/Blog'
import Contact from './component/Contact/Contact'
import Career from './component/Career/Career'
import Service from './component/Service/Service'
import Technology from './component/Technology/Technology'
import Opening from './component/Career/Opening'
import Admin from './component/Admin/Admin'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/career' element={<Career/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/technology' element={<Technology/>}/>
        <Route path='/opening' element={<Opening/>}/>
        <Route path='/admin' element={<Admin/>}/>
      </Routes>
    </Router>
  )
}

export default App