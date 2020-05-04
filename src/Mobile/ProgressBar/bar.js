import React, { Component } from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';
import MyIndic from '../Indicator/Indicator.js';

class Bar extends Component {
	
	getBar = () => {
		let ret = "";
		if (this.props.timeTillDate){
			let prgs = parseFloat(this.props.progress)
			if (new Date(this.props.timeTillDate) > (new Date())){
				/*
					<ProgressBar  className="mdl-progress-green" style={{margin: 'auto', width: '75%', height: "20px"}} progress={prgs} buffer={prgs} /> 
				*/
				ret = (
				
				<ProgressBar  className="mdl-progress-green" style={{margin: 'auto', width: '90%', height: "20px"}} progress={prgs} />
				)
			}
			else
			{
				ret = (
		  
		  <ProgressBar  className="mdl-progress-green" style={{margin: 'auto', width: '90%', height: "20px"}} progress={prgs}  /> 
			  /*
		  <ProgressBar  className="mdl-progress-green" style={{margin: 'auto', width: '75%', height: "20px"}} progress={prgs}  /> 
			  */
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
			  <div >
			  <div className="summ">
			  {this.props.skill} 
			  </div>
				  {this.getBar()}
				  <MyIndic procent={this.props.progress}/>
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
