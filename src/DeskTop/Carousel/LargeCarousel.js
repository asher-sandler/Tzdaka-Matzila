import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import './LargeCarousel.css';
//import {mClass } from '../../Utils/Utils.js';

class LargeCarousel extends Component {
    constructor(props) {
        super(props);
		this.state = {
			elements : this.newSet(this.props.slidesCount),
			elCounts: 0
		}
		

		
		
    }
	
	 componentDidMount() {
		this.setState({elements:this.newSet(this.props.slidesCount)})		 
	 }

	
	static getDerivedStateFromProps(props, state) {
		return {
		elCounts: props.slidesCount
	  

		}
	}
	
	showEl = (el) => {
			//console.log(el)
			return (
        
                    <div>		
					<img src={el}  alt={el}/>
					</div>			
			)
		}

	newSet = (counts) => {
		
		    if (counts > 0){
				let arr = Array(counts)
				
				for(let i = 1; i <= counts; i++){
					arr[i-1] = "/img/beit-habad/slider/DeskTop/" + i+"-1024x768.jpg";
				}
				
				
				return arr;
			}
			else
			{
				return "";
			}				
		}	
    
    render() {
        //let stops = JSON.parse(localStorage.getItem('stopsSTOPS'));
        //let slider      =  stops.items.filter(elem => ((elem.photo !== undefined ) && (elem.photo.id !== 0)));
		
		

       const settings = {
            infiniteLoop: true,
            showStatus: false,
            showThumbs: false,
            autoPlay : true,
            stopOnHover: true,
            transitionTime : 720,
            interval: 7000,
 
        };	




  
  

        return (
            <div className="large-carousel" dir="ltr">
                <Carousel  {...settings}>
                     {
                        Object.keys(this.state.elements).map((elem,idx) => (
                            <div key={idx}  >
							 {this.showEl(this.state.elements[idx])}
                                   
                            </div>
                        ))
                    }
                </Carousel>
                {/*<button onClick={(index) => console.log(index)}>test</button>*/}
            </div>
        )
    }
 
}

export default LargeCarousel;