import React from 'react';
import './Navbar.css';
import logo from './logo.png'

import {mClass} from '../../Utils/Utils.js';


class Navbar extends React.Component {
	
   
    render(){
	
	 
    return (
        <div className={mClass("navbar-desktop",this.props.dir)}>
			
            <div className="navbar-container">
			<div className="bsd">בְּסָ"ד</div>
                <img className="logo" src={logo} alt="Beit Habad Ramot" />
					
				{/*
                <div id="navbar" className="navbar-text">
                    <div className="shared-by">Shared by:</div>
                        <div className="name"><strong>Rav Yakov Zonnenfeld </strong></div>
                </div>
				*/}
            </div>
        </div>
    );
    }
}

export default Navbar;