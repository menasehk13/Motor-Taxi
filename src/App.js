import { Route,Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
// import Hero from './components/Hero/Hero';
import Landing from './pages/Landing';
// import Driver from './components/Driver/Driver';



function App() {
  return (
    <>
      <div>
        <Navbar />
        <div className="items-center">
          {/* <Routes>
              <Route exact path="/"element={<Hero/>}/>
              <Route exact path='/drivers' element={<Driver/>}/>              
          </Routes> */}
          <Routes>
            <Route exact path="/" element={<Landing/>} />
          </Routes>
        </div>
        {/* <Footer/> */}
      </div>
    </>
  );
}

export default App;
