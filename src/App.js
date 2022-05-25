import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Landing from './pages/Landing';
import Driver from './components/Driver/Driver';


function App() {
  return (
    <>
    <div>
        <Navbar/>
        <div className="items-center">
          {/* <Routes>
              <Route exact path="/"element={<Hero/>}/>
              <Route exact path='/drivers' element={<Driver/>}/>              
          </Routes> */}
           <Landing/>
        </div> 
        {/* <Footer/> */}
   </div>
   </>
  );
}

export default App;
