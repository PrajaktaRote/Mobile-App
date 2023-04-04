

import Home from './MobileApp/Home';
import About from './MobileApp/About';
import Login from './MobileApp/Login';
import Navbar from './MobileApp/Navigation'
import Footer from './MobileApp/Footer'


import './App.css';

function App() {
  return (
    <div>
      <div>
        <div>
          <Navbar></Navbar>
        <Home></Home>
        <About></About>
        </div>

      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
