import React, { Component } from 'react';
import './youtube.css';
//import {mClass } from '../../Utils/Utils.js';



class YouTube extends Component {


// ==================================================
    render() {
		
       return (
	   
	   <div className="youtube-mobile">

			<object data={this.props.youtube} className="youtube-mobile" alt="YouTube" title="Video"/>
				 

            </div>
        );
    }
}

export default YouTube;