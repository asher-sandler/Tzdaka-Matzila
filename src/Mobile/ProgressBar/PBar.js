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
            count : 0
        }


    }
	/*
    componentDidMount() {
		

        this.interval = setInterval(() => {


            this.setState({ count : this.state.count > 100? 0:  this.state.count + 1});
        }, 1000);
    }	
*/
    render(){
 
        return(
            <div className={mClass("progress-bar-mobile",this.props.dir)}>
				<Grid>
				<Cell col={12}>
				{/* 
				
				<ProgressBar className="mdl-progress-green" progress={33} buffer={87} /> 
				
				/* style={{ height: "20px"}}/>
				progress={this.props.procent} 
				summWanted
				this.props.summHarvested
				*/}
				<Bar skill={(moneyFormat(this.props.summHarvested) +  " ₪"  )}
                      progress={this.props.procent} 
					  timeTillDate={this.props.timeTillDate} />
					  
				</Cell>
				</Grid>
				<img src="/img/beit-habad/shutaf-1.png" className="image" alt="Shutafim beAhava" />
            </div>
        )
    }
    
}

export default PBar;