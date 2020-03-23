import React, { Component } from 'react';
import {mClass} from '../../Utils/Utils.js';
import {List,ListItem,ListItemContent, Icon} from 'react-mdl';

//import arrows from './arrows3.png';
//import tzdaka from './tzdaka-1.png';


import './Donators.css';

class Donator extends Component {
	tormim = (el,key) => {
		
		let ret = "";
		
		let styles = [
				{color:"cyan"},
				{color:"yellow"},
				{color:"springgreen"},
				{color:"magenta"},
				{color:"white"},
			];
		
		let st = styles[key%5]
		
		//console.log(st);
		
		ret = (
							
					<ListItem threeLine className="list-item">
						<Icon name="person" style={st} className="icon" />			  
						<ListItemContent  className="mdl-color-person--purple-600" subtitle={el.gsx$donationmessage["$t"]}>{el.gsx$userfirstname["$t"]} {el.gsx$userlastname["$t"]}</ListItemContent>
					
					 
						<div className="amount">
							<div className="currency-symbol">₪</div>
							{el.gsx$donationamount["$t"]}
						</div>
				  	
				  </ListItem>
				  
				  
					
		)
		//console.log(el)
		
		return ret;
	}

	
    render() {
		console.log(this.props.tormimPerson);
		if (this.props.tormimCount > 0){
		//if (false){	
        return (
            <div className={mClass("donat-mobile",this.props.dir)}>
				<h1 className="title" align="center">רשימת תרומות: {this.props.tormimCount} תורמים</h1>
				<div className="list-body"	>
					<List >
						{
							
							this.props.tormimPerson.map((elem,idx) =>(
							<div key={idx}>
									{this.tormim(elem,idx)}
										  
							</div>
							)
							) 
							
						}
				  
				  </List>
				</div>  
            </div>
		);
    }
	else
	{
		return (<div></div>)
	}	
    }
}

export default Donator;