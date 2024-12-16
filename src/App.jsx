import './App.scss';
import Footer from './component/Footer/Footer';
import HomePage from './Pages/HomePage/HomePage';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';


function App() {
 

  return (
    <>

    <BrowserRouter>
    
    <Routes>

    <Route path='/' element={<HomePage />} />
      
   
    </Routes>
    <Footer />
    
    </BrowserRouter>

   
  


     
    </>
  )
}

export default App
