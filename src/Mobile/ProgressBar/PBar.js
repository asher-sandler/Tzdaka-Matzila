import React , {Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import './PBar.css';

import Bar from './bar.js';
import {mClass,  moneyFormat} from '../../Utils/Utils.js';
//import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
//import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';


class PBar extends Component{
    constructor(props){
        super(props);


        this.state={
            activeTab : 0
        }


    }



    render(){
 
        
                                     

           

        return(
            <div className={mClass("progress-bar-mobile",this.props.dir)}>
				<Grid>
				<Cell col={12}>
				{/* 
				
				<ProgressBar className="mdl-progress-green" progress={33} buffer={87} /> 
				
				/* style={{ height: "20px"}}/>
				
				*/}
				<Bar skill={(moneyFormat(this.props.summHarvested) + " ₪")}
                      progress={110}/>
				</Cell>
				</Grid>
				<img src="/img/beit-habad/ramot.jpg" className="image" alt="Shutafim beAhava" />
            </div>
        )
    }
    
}

export default PBar;