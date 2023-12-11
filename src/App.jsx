import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home'
import Nav from './components/Nav'

function App() {
 

  return (
    <>
    <BrowserRouter>
   <Header/>
   <Nav/>
   <Routes>
    <Route path='/' element={<Home/>}/>
   </Routes>

    </BrowserRouter>
    
    </>
     
  )
}

export default App
