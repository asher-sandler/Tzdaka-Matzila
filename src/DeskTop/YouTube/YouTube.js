import React, { Component } from 'react';
import './youtube.css';
import {mClass } from '../../Utils/Utils.js';



class YouTube extends Component {


// ==================================================
    render() {
		
       return (
	   
	   <div className="video-carousel-desktop">

			
            <div className={mClass("youtube-desktop",this.props.dir)}>
			
			<div className="video-border" />
			<object data={this.props.youtube} className="video-mobile" alt="YouTube" title="Video"/>
			
			</div>
                
               

            </div>
        );
    }
}

export default YouTube;