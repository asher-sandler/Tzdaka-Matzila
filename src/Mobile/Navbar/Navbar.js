import React from 'react';
import './Navbar.css';
//import logo from './logo.png'
import {mClass} from '../../Utils/Utils.js';


class  Navbar extends React.Component {
 
    render(){
        
    return (
        <div className={mClass("navbar-mobile",this.props.dir)}>
			<div className="bsd">בְּ"ה</div>
            <div className="bh">בית חב"ד</div>
            <div className="bhr">רמות</div>
            <img className="logo" src="/img/beit-habad/habad-ramot-1.png" alt="Beit Habad Ramot" />
            {/*
            ב''ה
            בית חב"ד רמות
            <div className="navbar-text">
                <div className="shared-by">Shared by:</div>
                <div className="name"><strong>Rav Yakov Zonnenfeld</strong></div>
            </div>
			*/}
        </div>
    );
}
}

export default Navbar;