import React, { Component } from 'react';
import {mClass, moneyFormat} from '../../Utils/Utils.js';
import {List,ListItem,ListItemContent, Icon, FixedSizeList} from 'react-mdl';

//import arrows from './arrows3.png';
//import tzdaka from './tzdaka-1.png';


import './Donators.css';

class Aim extends Component {
  /*  
	getLogo = () => {
		
		let ret = "";
		if (this.props.timeTillDate){
			if (new Date(this.props.timeTillDate) > (new Date())){
				ret = (
					<img className="arrows-process" src={haziShakel} alt="Processing" title="Processing"/>
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
*/
    render() {

        // <i class="fas fa-check"></i>
		//console.log(this.props.timeTillDate < Date());

        return (
            <div className={mClass("donat",this.props.dir)}>
				<h1 className="title" align="center">רשימת תרומות: 458 תורמים</h1>
			<div className="list-body"	>
					<List >
					
					<ListItem threeLine>
						<Icon name="person" style={{color:"cyan", fontSize:"3rem",borderRadius: "50%",backgroundColor: "rgb(117,117,117)",marginLeft:"50px"}} />			  
						<ListItemContent  className="mdl-color-person--purple-600" subtitle="Bryan Cranston played the role of Walter in Breaking Bad. He is also known for playing Hal in Malcom in the Middle.">Bryan Cranston</ListItemContent>
					
					 
						<div class="amount">
							<div class="currency-symbol">₪</div>
							1000 
						</div>
				  	
				  </ListItem>
				  
				  <hr />
					
					<ListItem threeLine>
						<Icon name="person" style={{color:"yellow", fontSize:"3rem",borderRadius: "50%",backgroundColor: "rgb(117,117,117)",marginLeft:"50px"}} />			  
						<ListItemContent  className="mdl-color-person--purple-600" subtitle="Bryan Cranston played the role of Walter in Breaking Bad. He is also known for playing Hal in Malcom in the Middle.">Bryan Cranston</ListItemContent>
					
					 
						<div class="amount">
							<div class="currency-symbol">₪</div>
							1000 
						</div>
				  	
				  </ListItem>
				  
				  <hr />


					
					<ListItem threeLine>
						<Icon name="person" style={{color:"springgreen", fontSize:"3rem",borderRadius: "50%",backgroundColor: "rgb(117,117,117)",marginLeft:"50px"}} />			  
						<ListItemContent  className="mdl-color-person--purple-600" subtitle="Bryan Cranston played the role of Walter in Breaking Bad. He is also known for playing Hal in Malcom in the Middle.">Bryan Cranston</ListItemContent>
					
					 
						<div class="amount">
							<div class="currency-symbol">₪</div>
							1000 
						</div>
				  	
				  </ListItem>
				  
				  <hr />		


					<ListItem threeLine>
						<Icon name="person" style={{color:"magenta", fontSize:"3rem",borderRadius: "50%",backgroundColor: "rgb(117,117,117)",marginLeft:"50px"}} />			  
						<ListItemContent  className="mdl-color-person--purple-600" subtitle="Bryan Cranston played the role of Walter in Breaking Bad. He is also known for playing Hal in Malcom in the Middle.">Bryan Cranston</ListItemContent>
					
					 
						<div class="amount">
							<div class="currency-symbol">₪</div>
							1000 
						</div>
				  	
				  </ListItem>
				  
				  <hr />					  

					
					<ListItem threeLine>
						<Icon name="person" style={{color:"cyan", fontSize:"3rem",borderRadius: "50%",backgroundColor: "rgb(117,117,117)",marginLeft:"50px"}} />			  
						<ListItemContent  className="mdl-color-person--purple-600" subtitle="Bryan Cranston played the role of Walter in Breaking Bad. He is also known for playing Hal in Malcom in the Middle.">Bryan Cranston</ListItemContent>
					
					 
						<div class="amount">
							<div class="currency-symbol">₪</div>
							1000 
						</div>
				  	
				  </ListItem>
				  
				  <hr />
					
					<ListItem threeLine>
						<Icon name="person" style={{color:"yellow", fontSize:"3rem",borderRadius: "50%",backgroundColor: "rgb(117,117,117)",marginLeft:"50px"}} />			  
						<ListItemContent  className="mdl-color-person--purple-600" subtitle="Bryan Cranston played the role of Walter in Breaking Bad. He is also known for playing Hal in Malcom in the Middle.">Bryan Cranston</ListItemContent>
					
					 
						<div class="amount">
							<div class="currency-symbol">₪</div>
							1000 
						</div>
				  	
				  </ListItem>
				  
				  <hr />


					
					<ListItem threeLine>
						<Icon name="person" style={{color:"springgreen", fontSize:"3rem",borderRadius: "50%",backgroundColor: "rgb(117,117,117)",marginLeft:"50px"}} />			  
						<ListItemContent  className="mdl-color-person--purple-600" subtitle="Bryan Cranston played the role of Walter in Breaking Bad. He is also known for playing Hal in Malcom in the Middle.">Bryan Cranston</ListItemContent>
					
					 
						<div class="amount">
							<div class="currency-symbol">₪</div>
							1000 
						</div>
				  	
				  </ListItem>
				  
				  <hr />		


					<ListItem threeLine>
						<Icon name="person" style={{color:"magenta", fontSize:"3rem",borderRadius: "50%",backgroundColor: "rgb(117,117,117)",marginLeft:"50px"}} />			  
						<ListItemContent  className="mdl-color-person--purple-600" subtitle="Bryan Cranston played the role of Walter in Breaking Bad. He is also known for playing Hal in Malcom in the Middle.">Bryan Cranston</ListItemContent>
					
					 
						<div class="amount">
							<div class="currency-symbol">₪</div>
							1000 
						</div>
				  	
				  </ListItem>
				  
				  <hr />					  

				  
				  </List>
				</div>  
            </div>
        );
    }
}

export default Aim;