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
	 
	 styleProc = () =>{
		

		let ret = "indicator-mobile";
		if (this.state.procent === 100)
		{
			ret = ret + " indicator-mea-proc"
		}
		
		return ret;	
		 
	 }

    render(){
		//console.log(this.state.procent );	
		if (this.state.procent === undefined){
			return ""
		}
		else
		{
			
		let procStyle = new Array(101)
		 let proc = 59;
		 for(let i = 0; i <=9; ++i){
			 procStyle[i] = {transform: "translate("+proc+"% , 55%)"};
			 proc += 6.888889;
			 //console.log(i," =>", procStyle[i])
		 }
		 
		 		
		/*
		 procStyle[0]   = {transform: "translate(59% , 55%)"};
		 procStyle[1]   = {transform: "translate(166% , 55%)"};
		 procStyle[2]   = {transform: "translate(183% , 55%)"};
		 procStyle[3]   = {transform: "translate(201% , 55%)"};
		 procStyle[4]   = {transform: "translate(220% , 55%)"};				 
		 procStyle[5]   = {transform: "translate(238% , 55%)"};
		 procStyle[6]   = {transform: "translate(257% , 55%)"};
		 procStyle[7]   = {transform: "translate(276% , 55%)"};
		 procStyle[8]   = {transform: "translate(294% , 55%)"};
		 procStyle[9]   = {transform: "translate(121% , 55%)"};
		 */
		 /*
		 procStyle[10]  = {transform: "translate(278% , 55%)"};
		 procStyle[11]  = {transform: "translate(298% , 55%)"};
		 procStyle[12]  = {transform: "translate(309% , 55%)"};
		 procStyle[13]  = {transform: "translate(323% , 55%)"};
		 procStyle[14]  = {transform: "translate(338% , 55%)"};
		 procStyle[15]  = {transform: "translate(353% , 55%)"};	
		 procStyle[16]  = {transform: "translate(368% , 55%)"};			 

		 procStyle[17]  = {transform: "translate(383% , 55%)"};	
		 procStyle[18]  = {transform: "translate(398% , 55%)"};	
		 procStyle[19]  = {transform: "translate(413% , 55%)"};	
		 procStyle[20]  = {transform: "translate(428% , 55%)"};	
		 procStyle[21]  = {transform: "translate(443% , 55%)"};	
		 procStyle[22]  = {transform: "translate(458% , 55%)"};	
		 procStyle[23]  = {transform: "translate(473% , 55%)"};	
		 procStyle[24]  = {transform: "translate(488% , 55%)"};	
		 procStyle[25]  = {transform: "translate(503% , 55%)"};	
		 procStyle[26]  = {transform: "translate(518% , 55%)"};

		 procStyle[27]  = {transform: "translate(533% , 55%)"};
		 procStyle[28]  = {transform: "translate(548% , 55%)"};
		 procStyle[29]  = {transform: "translate(563% , 55%)"};
		 procStyle[30]  = {transform: "translate(578% , 55%)"};
		 
		 
		 
		 procStyle[31]  = {transform: "translate(593% , 55%)"};
		 procStyle[32]  = {transform: "translate(608% , 55%)"};
		 procStyle[33]  = {transform: "translate(623% , 55%)"};
		 
		 
		 
		 procStyle[34]  = {transform: "translate(638% , 55%)"};
		 
		 
		 procStyle[35]  = {transform: "translate(653% , 55%)"};
		 procStyle[36]  = {transform: "translate(668% , 55%)"};
		 procStyle[37]  = {transform: "translate(683% , 55%)"};
		 procStyle[38]  = {transform: "translate(698% , 55%)"};
		 procStyle[39]  = {transform: "translate(713% , 55%)"};
		 procStyle[40]  = {transform: "translate(728% , 55%)"};
		 procStyle[41]  = {transform: "translate(743% , 55%)"};
		 procStyle[42]  = {transform: "translate(758% , 55%)"};
		 procStyle[43]  = {transform: "translate(773% , 55%)"};
		 procStyle[44]  = {transform: "translate(788% , 55%)"};
		 procStyle[45]  = {transform: "translate(803% , 55%)"};
		 procStyle[46]  = {transform: "translate(818% , 55%)"};
		 procStyle[47]  = {transform: "translate(833% , 55%)"};
		 procStyle[48]  = {transform: "translate(848% , 55%)"};
		 procStyle[49]  = {transform: "translate(863% , 55%)"};		 
		 
		 
		 

		 procStyle[50]  = {transform: "translate(875% , 55%)"};
		 
		 
		 procStyle[51]  = {transform: "translate(890% , 55%)"};
		 procStyle[52]  = {transform: "translate(905% , 55%)"};
		 procStyle[53]  = {transform: "translate(920% , 55%)"};
		 procStyle[54]  = {transform: "translate(935% , 55%)"};
		 procStyle[55]  = {transform: "translate(950% , 55%)"};
		 procStyle[56]  = {transform: "translate(965% , 55%)"};
		 procStyle[57]  = {transform: "translate(980% , 55%)"};
		 procStyle[58]  = {transform: "translate(995% , 55%)"};
		 procStyle[59]  = {transform: "translate(1010% , 55%)"};
		 procStyle[60]  = {transform: "translate(1025% , 55%)"};
		 */
		 proc = 128;
		 for(let i = 10; i <=99; ++i){
			 procStyle[i] = {transform: "translate("+proc+"% , 55%)"};
			 proc += 6.766;
		 }
		 
		 
		 procStyle[100] = {transform: "translate(632%, 55%)"};
		 //console.log(procStyle);
        return(
			
			<div className={this.styleProc()} style={procStyle[this.state.procent]}>
				<div className="percent">{this.state.procent}%</div>
				<div className="indicator-mobile-clearfix"></div>
			</div>
			
        )
		}
	}
    
}

export default MyIndic;