import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    const links = [
        {to: "/about", text: 'ABOUT'},
        {to: "/projects", text: 'PROJECT'},
        {to: "/contacts", text: 'CONTACT'},
    ];

    let linksComponent = links.map( (link) => {
        let textColor = 'black';
        if (link.text === props.selected) {
            textColor = 'red';
        }

        return <Link to={link.to} style={{ color: textColor}}>{link.text}|</Link> 
    });
    
    return (
        
        <div className='flex'>
    
          <div className='info1'>
            <h1 className='name'>ALLEN XU</h1>
          </div>
    
          <div className='info2'>
            <h2 className="location">BASED IN TORONTO, ONTARIO</h2>
          </div>
        
          <div className='contactinfo'>
            |{linksComponent}
          </div>
    
        </div>
    );
}

export default Navbar;