import React , {Component} from 'react';

import './PayModule.css';
//import visa from './visa.png';

//import visa from './cc.png';


import {mClass,isNumber} from '../../Utils/Utils.js';
//import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
//import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';


class PayModule extends Component{
	constructor(props){
		super(props);
		this.state = {
			currency : "ILS",
			amount   : 10,
			flag     : ["/img/beit-habad/isrflag.png",
						"/img/beit-habad/usflaf.png "],
			currentFlag : 0			
		}
	}
/*	
	currencyChange = (event) => {
		
		let inputCurrency=event.target.value;
		this.setState({currency: inputCurrency});
	}
	
	checkAmount = (event) => {
		let previousAmount = this.state.amount;
		let inputAmount = event.target.value;
		let nAmount = previousAmount
		if (isNumber(inputAmount)){
			nAmount = Math.round(parseFloat(inputAmount));
			console.log(nAmount);

		}
		this.setState({amount: nAmount});			
			
		
		
	}
	
	
*/	
	sendForm = (event) => {
		event.preventDefault();

		let elements = event.target.elements;

		let amount   = elements["amount"  ].value;
		let currency = elements["currency"].value;
		let payment  = elements["payment" ].value;
		
		console.log(amount);
		console.log(currency);
		console.log(payment);		
		let urlMatare = "https://www.matara.pro/nedarimplus/online/?mosad=7001560&TakanonChecked=1"
		
		urlMatare += "&Amount="+amount
		if (currency ==="USD"){
			urlMatare += "&ForceDollar=1"
		}
		if (payment === "normal"){
			urlMatare += "&NormalDefault=1"
		}
		else if (payment === "keva"){
			urlMatare += "&KevaDefault=1"
		}
		let win = window.open(urlMatare, '_blank');
		win.focus();
		
	}
	
	changeCurrency = (event) => {
		let currncy = event.target.value;
		console.log(currncy);
		let flagidx = 0
		if (currncy === "USD")
		{
			flagidx=1;
			
		}
		this.setState({currentFlag:flagidx});
	}
	
 


    render(){
 
        return(
            <div className={mClass("pay-module-desktop",this.props.dir)}>
				<form onSubmit={this.sendForm}>
			    <div>
					<h3>התרומה שלכם</h3>
					<div className="block">
						
						<div>
						<input type="number" defaultValue={this.state.amount} name="amount"
							min="1" max="999999" maxLength="6"  placeholder="סכום" 
							className="input-control"
						/>
						<select name="currency" className="select-control" id="valute" onChange={this.changeCurrency}>
							<option value="ILS" >
							
								שקל חדש
								₪
								
							</option>
							<option value="USD">
								
									דולר אמריקאי 
									$
													
							</option>
						</select>
						<div className="flag">
						<img src={this.state.flag[this.state.currentFlag]} alt="Currency" className="image-flag"/>
						</div>
						<div className="radio-control">
						<div><input type="radio" name="payment" value="normal" defaultChecked className="radio-control"/>חיוב בודד / תשלומים</div>
						<div><input type="radio" name="payment" value="keva" className="radio-control"/>הוראת קבע אשראי</div>
						</div>
					
						</div>
					</div>
				</div>
				{/*
				className="form-control hidden select2-hidden-accessible"  
				 aria-hidden="true"
				
				<a href="https://www.matara.pro/nedarimplus/online/?mosad=7001560" alt="Pay" target="_blank" rel="noopener noreferrer">
				
					<div className="title">לתרום באופן מקוון</div>
					
					<i className="fa fa-cc-visa i-visa" aria-hidden="true"></i>
					
					<div>
				
					<div>
                    <img src={visa} className="pay-image" alt="visa" />
					</div>
                </a>
				*/}
				<input type="submit"  value="תרום עכשיו" className="trom">
				</input>
				{/*
				<a href="https://www.matara.pro/nedarimplus/online/?mosad=7001560" alt="Pay" target="_blank" rel="noopener noreferrer" style={{	textDecoration: "none"}}>
					
				<div className="dai-tzdaka">
					תרום עכשיו
					 </div>
					
					<div className="trom" >
					
					<span className="span-trom">
					
					תרום עכשיו
					<i className="fa fa-money i-visa" aria-hidden="true"></i>
					</span>
					</div>
				
				</a>
				*/}	 
				</form>
            </div>
        )
    }
    
}

export default PayModule;