import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
   <div className='root'>
    <div className='info'>
      <h1 className='name'>Allen Xu</h1>
      <h2 className="location">Based in Toronto, Ontario</h2>
      {/*<h2 className='name'>XU</h2>*/}
      <div className='contactinfo'>
         {/*java in curly brackets to distinguish from html in reach*/}
        {/* below we wrap the text About with a link, the linke ends with ABOUT */}
        |{" "} <Link to="/about">About</Link> |{" "} 
        <Link to="/projects">Project</Link> |{" "} 
        <Link to="/contacts">Contact</Link> |{" "} 
      </div>
    </div>
    <h4 className="title">SOFTWARE DEVELOPER</h4>
  </div>
  );
}

export default App;
