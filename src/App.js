import './App.css';
import { Link } from 'react-router-dom';

function App() {

  
  
  return (
   <div className='root'>
    <div className='info'>

  
      <h1 className='name'>Allen Xu</h1>
     
      <h2 className="location">Based in Toronto, Ontario</h2>
      
      <div className='contactinfo'>
         {/*java in curly brackets to distinguish from html in reach*/}
        {/* below we wrap the text About with a link, the linke ends with ABOUT */}
        |{" "} <Link to="/about" style={{ color: '#000000'}}>About</Link> |{" "} 
        <Link to="/projects" style={{ color: '#000000'}}>Project</Link> |{" "} 
        <Link to="/contacts" style={{ color: '#000000'}}>Contact</Link> |{" "} 
      </div>
    </div>

    <div className='titlemain'>
      <h4 className="title">"SOFTWARE DEVELOPER"</h4>
    </div>
    
    <div className="name2">
      <h5 className="title">"ALLEN XU"</h5>
    </div>

    <div className="picture">
      <input type="file" />
    </div>
  
  </div>
  );
}

export default App;
