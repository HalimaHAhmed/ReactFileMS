
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { login } from './pages/homepage/Authpages/Login/login'

import { register } from './pages/homepage/Authpages/Register/register'
import Homepage from './pages/homepage/homepage'

const App =() => {
 
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/login' element={<login/>}/>
        <Route path='/register' element={<register/>}/>
       
      </Routes>
    
    </div>
  )
}

export default App
