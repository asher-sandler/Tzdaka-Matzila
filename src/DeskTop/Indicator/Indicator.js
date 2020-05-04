import React , {Component} from 'react';
//import { Grid, Cell } from 'react-mdl';
import './Indicator.css';


//import {mClass } from '../../Utils/Utils.js';
//import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
//import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';


class MyIndic extends Component{
    constructor(props){
        super(props);

        this.state={
            procent : undefined
        }
    }
	
	 static getDerivedStateFromProps(props, state) {
		 return(
		 {procent: props.procent > 100 ? 100 : props.procent}
		 )
	 }	

    render(){
		if (this.state.procent === undefined){
			return ""
		}
		else
		{
		//console.log(this.state.procent );		
		let procStyle = new Array(101)
		 procStyle[0]   = {transform: "translate(148% , 125%)"};
		 procStyle[1]   = {transform: "translate(166% , 125%)"};
		 procStyle[2]   = {transform: "translate(183% , 125%)"};
		 procStyle[3]   = {transform: "translate(201% , 125%)"};
		 procStyle[4]   = {transform: "translate(220% , 125%)"};				 
		 procStyle[5]   = {transform: "translate(238% , 125%)"};
		 procStyle[6]   = {transform: "translate(257% , 125%)"};
		 procStyle[7]   = {transform: "translate(276% , 125%)"};
		 procStyle[8]   = {transform: "translate(294% , 125%)"};
		 procStyle[9]   = {transform: "translate(312% , 125%)"};
		 /*
		 procStyle[10]  = {transform: "translate(278% , 125%)"};
		 procStyle[11]  = {transform: "translate(298% , 125%)"};
		 procStyle[12]  = {transform: "translate(309% , 125%)"};
		 procStyle[13]  = {transform: "translate(323% , 125%)"};
		 procStyle[14]  = {transform: "translate(338% , 125%)"};
		 procStyle[15]  = {transform: "translate(353% , 125%)"};	
		 procStyle[16]  = {transform: "translate(368% , 125%)"};			 

		 procStyle[17]  = {transform: "translate(383% , 125%)"};	
		 procStyle[18]  = {transform: "translate(398% , 125%)"};	
		 procStyle[19]  = {transform: "translate(413% , 125%)"};	
		 procStyle[20]  = {transform: "translate(428% , 125%)"};	
		 procStyle[21]  = {transform: "translate(443% , 125%)"};	
		 procStyle[22]  = {transform: "translate(458% , 125%)"};	
		 procStyle[23]  = {transform: "translate(473% , 125%)"};	
		 procStyle[24]  = {transform: "translate(488% , 125%)"};	
		 procStyle[25]  = {transform: "translate(503% , 125%)"};	
		 procStyle[26]  = {transform: "translate(518% , 125%)"};

		 procStyle[27]  = {transform: "translate(533% , 125%)"};
		 procStyle[28]  = {transform: "translate(548% , 125%)"};
		 procStyle[29]  = {transform: "translate(563% , 125%)"};
		 procStyle[30]  = {transform: "translate(578% , 125%)"};
		 
		 
		 
		 procStyle[31]  = {transform: "translate(593% , 125%)"};
		 procStyle[32]  = {transform: "translate(608% , 125%)"};
		 procStyle[33]  = {transform: "translate(623% , 125%)"};
		 
		 
		 
		 procStyle[34]  = {transform: "translate(638% , 125%)"};
		 
		 
		 procStyle[35]  = {transform: "translate(653% , 125%)"};
		 procStyle[36]  = {transform: "translate(668% , 125%)"};
		 procStyle[37]  = {transform: "translate(683% , 125%)"};
		 procStyle[38]  = {transform: "translate(698% , 125%)"};
		 procStyle[39]  = {transform: "translate(713% , 125%)"};
		 procStyle[40]  = {transform: "translate(728% , 125%)"};
		 procStyle[41]  = {transform: "translate(743% , 125%)"};
		 procStyle[42]  = {transform: "translate(758% , 125%)"};
		 procStyle[43]  = {transform: "translate(773% , 125%)"};
		 procStyle[44]  = {transform: "translate(788% , 125%)"};
		 procStyle[45]  = {transform: "translate(803% , 125%)"};
		 procStyle[46]  = {transform: "translate(818% , 125%)"};
		 procStyle[47]  = {transform: "translate(833% , 125%)"};
		 procStyle[48]  = {transform: "translate(848% , 125%)"};
		 procStyle[49]  = {transform: "translate(863% , 125%)"};		 
		 
		 
		 

		 procStyle[50]  = {transform: "translate(875% , 125%)"};
		 
		 
		 procStyle[51]  = {transform: "translate(890% , 125%)"};
		 procStyle[52]  = {transform: "translate(905% , 125%)"};
		 procStyle[53]  = {transform: "translate(920% , 125%)"};
		 procStyle[54]  = {transform: "translate(935% , 125%)"};
		 procStyle[55]  = {transform: "translate(950% , 125%)"};
		 procStyle[56]  = {transform: "translate(965% , 125%)"};
		 procStyle[57]  = {transform: "translate(980% , 125%)"};
		 procStyle[58]  = {transform: "translate(995% , 125%)"};
		 procStyle[59]  = {transform: "translate(1010% , 125%)"};
		 procStyle[60]  = {transform: "translate(1025% , 125%)"};
		 */
		 let proc = 290;
		 for(let i = 10; i <=99; ++i){
			 procStyle[i] = {transform: "translate("+proc+"% , 125%)"};
			 proc += 15;
		 }
		 
		 
		 procStyle[100] = {transform: "translate(1395%, 125%)"};
        return(
			
			<div className="indicator" style={procStyle[this.state.procent]}>
				<div className="percent">{this.state.procent}%</div>
			</div>
        )
		}
	}
    
}

export default MyIndic;