import React , {Component} from 'react';

import './PayModule.css';
//import visa from './visa.png';

import visa from './cc.png';


import {mClass} from '../../Utils/Utils.js';
//import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
//import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';


class PayModule extends Component{
 


    render(){
 
        return(
            <div className={mClass("pay-module-desktop",this.props.dir)}>
				
				<a href="https://www.matara.pro/nedarimplus/online/?mosad=7001560" alt="Pay" target="_blank" rel="noopener noreferrer">
					<div className="title">Donate Online</div>
					{/*
					<i className="fa fa-cc-visa i-visa" aria-hidden="true"></i>
					*/}
					<div>
                    <img src={visa} className="pay-image" alt="visa" />
					</div>
                </a>			
            </div>
        )
    }
    
}

export default PayModule;