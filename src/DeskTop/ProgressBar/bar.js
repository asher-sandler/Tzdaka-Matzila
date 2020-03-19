import React, { Component } from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';
import {moneyFormat} from '../../Utils/Utils.js';

class Bar extends Component {
	/*
	constructor(props) {
		super(props);
		this.state = {
			
		}
		
	}
	*/
	
	
	/*
	 static getDerivedStateFromProps(props, state) {
		 return({untilDate: new Date(props.timeTillDate),
				 untilStr:  formatDate(props.timeTillDate)
				 
		 })
	 }
	*/ 	
	
	
	
 	getBar = () => {
		
		let ret = "";
		if (this.props.timeTillDate){
			let prgs = parseFloat(this.props.progress)
			//console.log(new Date(this.props.timeTillDate) > (new Date()))
			if (new Date(this.props.timeTillDate) > (new Date())){
				ret = (
		  
		  <ProgressBar  className="mdl-progress-green" style={{margin: 'auto', width: '75%', height: "20px"}} progress={prgs} buffer={prgs} /> 
				)
			}
			else
			{
				ret = (
		  
		  <ProgressBar  className="mdl-progress-green" style={{margin: 'auto', width: '75%', height: "20px"}} progress={prgs}  /> 
				)
			}
		}		
		
		return ret;
	} 

	getSkill = () => {
		let ret = ""
		
		if (this.props.timeTillDate){
			if (new Date(this.props.timeTillDate) > (new Date())){			
		
				ret =(moneyFormat(this.props.summHarvested) +  " ₪ ( " + this.props.procent+"% )" );
			
			}
			else
			{
				ret =(moneyFormat(this.props.summHarvested) +  " ₪" );
				
			}				
		}
		return ret;
	}
	
	
  render() {
    return(
      <Grid>
        <Cell col={12}>
			{/* indeterminate */}
          <div style={{display: 'flex'}}>

			{this.getSkill()} 
		  
			{this.getBar()}
		  
		  </div>
        </Cell>
      </Grid>
    )
  }
}

export default Bar;
