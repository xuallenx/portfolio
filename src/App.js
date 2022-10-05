import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
   <div>
      <h1>ALLEN</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        {/*java in curly brackets to distinguish from html in reach*/}
        {/* below we wrap the text About with a link, the linke ends with ABOUT */}
        <Link to="/about">About</Link> |{" "}  
        <Link to="/projects">Project</Link>
      </nav>
    </div>
  );
}

export default App;
