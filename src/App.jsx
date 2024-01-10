import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import PageOne from './Pages/PageOne'
import Page404 from './Pages/404'
import PageTwo from './Pages/PageTwo'


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
          <Route path='/1' element={<PageOne/>}/>
          <Route path='/2' element={<PageTwo/>}/>
          <Route path='*' element={<Page404/>}/>
      </Routes>
    </Router>
  )
}

export default App
