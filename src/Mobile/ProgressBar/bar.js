import React, { Component } from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';

class Bar extends Component {
	
	getBar = () => {
		let ret = "";
		if (this.props.timeTillDate){
			let prgs = parseFloat(this.props.progress)
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
	render() {
		return(
		  <Grid>
			<Cell col={12}>
				{/* indeterminate buffer={this.props.progress}*/}
			  <div style={{display: 'flex'}}>{this.props.skill} 
				  {this.getBar()}
				  {/*
			  <ProgressBar  className="mdl-progress-green" style={{margin: 'auto', width: '75%', height: "20px"}} progress={this.props.progress} buffer={this.props.progress}/> 
				  */}
			  </div>
			</Cell>
		  </Grid>
		)
  }
}

export default Bar;
