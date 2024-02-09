import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './component/Home/Home'
import './App.css'
import About from './component/About/About'
import Blog from './component/Blog/Blog'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/blog' element={<Blog/>}/>
      </Routes>
    </Router>
  )
}

export default App