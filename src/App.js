import './App.css';
import { Link } from 'react-router-dom';
import pic from './assets/neon city.webp';
import pic1 from './assets/Off-White 1.jpeg';
import pic2 from './assets/arrow left.jpeg';


import Navbar from './Navbar';

function App() {
  
  return (
  <div className='root'>  
    <Navbar selected=''/>
    
    <div className='titlemain'>
      <h4 className="title">"SOFTWARE DEVELOPER"</h4>
    </div>
    
    <div className="name2">
      <h5 className="title">"ALLEN XU"</h5>
    </div>


    {/*<h5 className="bio">"HI, I AM ALLEN XU"</h5>*/}
  

    <img className="picture" src={pic} alt="me." />
    <img className="arrow" src={pic1} alt="arrow." />
    <img className="arrow-left-bottom" src={pic2} alt="arrow." />

  </div>
  );
}

export default App;
