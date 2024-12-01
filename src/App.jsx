import './App.scss'
import Header from './components/Header/Header';
// import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';

function App() {
 

  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
    
      <Route path='/' />
   
    </Routes>
    
    </BrowserRouter>
   


     
    </>
  )
}

export default App
