import React, { Component } from 'react';
import {mClass, moneyFormat} from '../../Utils/Utils.js';
import done from './done.png';
//import arrows from './arrows3.png';
//import tzdaka from './tzdaka-1.png';
//import haziShakel from './hazi-shekel2.png';


import './Aim.css';

class Aim extends Component {
    
	getLogo = () => {
		let asarashkalim="/img/beit-habad/10shekel.png"
		let ret = "";
		if (this.props.timeTillDate){
			if (new Date(this.props.timeTillDate) > (new Date())){
				ret = (
					<img className="arrows-process" src={asarashkalim} alt="Processing" title="Processing"/>
				)
			}
			else
			{
				ret = (
					<img className="google-play" src={done} alt="Done" title="Done"/>
				)
			}
		}		
		
		return ret;
	}

    render() {

        // <i class="fas fa-check"></i>
		//console.log(this.props.timeTillDate < Date());

        return (
            <div className={mClass("aim",this.props.dir)}>
                <div className="container">
                    <h1 className="summ-aim">{moneyFormat(this.props.summWanted)} ₪ סכום יעד</h1>
						{/*<h1 className="summ-harvested">{moneyFormat(this.props.summHarvested)} ₪</h1>*/}
					
					
					{
						this.getLogo()
					
					}
                    
                    
                </div>
            </div>
        );
    }
}

export default Aim;