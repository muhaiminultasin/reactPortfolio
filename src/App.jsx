import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home/Home'
import MyLanding from './Components/MyLanding/MyLanding'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/service-details' element={<MyLanding/>} />
        </Routes>      
      </BrowserRouter>
    </>
  )
}

export default App
