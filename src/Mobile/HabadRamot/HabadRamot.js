import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import './HabadRamot.css';
//import {mClass } from '../../Utils/Utils.js';

class HabadRamot extends Component {
  
	
    
    render() {
 
       const settings = {
            infiniteLoop: true,
            showStatus: false,
            showThumbs: false,
			showIndicators: false,
			showArrows: true,
            autoPlay : true,
            stopOnHover: true,
            transitionTime : 720,
            interval: 9000,
 
        };	

        return (
            <div className="large-habad-mobile" dir="ltr">
                <Carousel  {...settings}>
   
					<div >
						<img src="/img/beit-habad/sl1/desktop/new/1-1.jpg"  alt="1"/>
						   
					</div>

					<div >
						<img src="/img/beit-habad/sl1/desktop/new/1-2.jpg"  alt="2"/>
						   
					</div>

					<div >
						<img src="/img/beit-habad/sl1/desktop/new/2-1.jpg"  alt="3"/>
						   
					</div>
					
					<div >
						<img src="/img/beit-habad/sl1/desktop/new/2-2.jpg"  alt="4"/>
						   
					</div>
					
					<div >
						<img src="/img/beit-habad/sl1/desktop/new/3-1.jpg"  alt="5"/>
						   
					</div>
					
					<div >
						<img src="/img/beit-habad/sl1/desktop/new/3-2.jpg"  alt="6"/>
						   
					</div>

                </Carousel>
                {/*<button onClick={(index) => console.log(index)}>test</button>*/}
            </div>
        )
    }
 
}

export default HabadRamot;