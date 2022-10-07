import './App.css';
import { Link } from 'react-router-dom';
import pic from './assets/neon city.webp';

import pic1 from './assets/eric.jpeg';
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

    <img className="picture" src={pic} alt="Picture of me." />
    <img className="picture" src={pic1} alt="Picture of me." />
    
    

  </div>
  );
}

export default App;
