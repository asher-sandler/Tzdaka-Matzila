import React from 'react';
import './Navbar.css';
//import logo from './logo.png'
import {mClass} from '../../Utils/Utils.js';


class  Navbar extends React.Component {
 
    render(){
        
    return (
        <div className={mClass("navbar-mobile",this.props.dir)}>
            <img className="logo" src="/img/beit-habad/habad-ramot.png" alt="Beit Habad Ramot" />
            
            <div className="navbar-text">
                <div className="shared-by">Shared by:</div>
                <div className="name"><strong>Rav Yakov Zonnenfeld</strong></div>
            </div>
        </div>
    );
}
}

export default Navbar;