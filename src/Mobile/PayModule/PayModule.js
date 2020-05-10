import React, {Component} from 'react';
import './PayModule.css';
import '../../SharedComponent/dropmenu/dropmenu.css';
import {mClass} from '../../Utils/Utils.js';

class PayModule extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currency: "ILS",
            amount: 10,
            flag: ["/img/beit-habad/isrflag.png",
                "/img/beit-habad/usflaf.png "],
            clickState: 1,
            selectClass : ['menu-visible','menu-hidden'],
            triangleClass : ['t-down','t-up'] ,   
            currArray: ["₪","$"],
            defValue: ["ILS", "USD"],	
            menu : [
				{descr: "שקל חדש", symb : "₪"},
				{descr: "דולר אמריקאי", symb : "$"}
			],
			curCurrency : 0,           
            currentFlag: 0,
            formValidated: false
        }


    }
    // ************************************************************
    
    itemIsHighlighted = (idx) => {
		let ret = "select2-results__option";
		if (idx === this.state.curCurrency){
			ret += "  select2-results__option--highlighted";
		}
		return ret;
	}
    
    // ************************************************************
    
    selectClick = (event, data) => {
		//console.log('data',data);
        this.setState({curCurrency:data,  clickState: 1})
        
    }
    
    // ************************************************************
    selectOpt = (e) => {

		let st =  0; 
		
		if (this.state.clickState === 0) 
		{   st = 1;
		}
		else
		{
			st = 0;
		}		
		
	
		this.setState({clickState : st});
		
		

    }
    
    // ************************************************************
    componentDidMount() {
        this.validate();
    }
    // ************************************************************
    sendForm = (event) => {
        event.preventDefault();
        let box = document.querySelector('#hidden-box');
        box.className = "shown-mobile";
        if (this.state.formValidated) {


            let elements = event.target.elements;

            let amount = elements["amount"].value;
   
            let currency = this.state.defValue[this.state.curCurrency]
            let payment = elements["payment"].value;

            let firstname = elements["firstname"].value;
            let lastname = elements["lastname"].value;

            let address = elements["address"].value;
            let idnumber = elements["idnumber"].value;
            let city = elements["city"].value;


            let email = elements["email"].value;
            let phone = elements["phone"].value;
            let comment = elements["comment"].value;

 

            let urlMatare = "https://www.matara.pro/nedarimplus/online/?mosad=7001560&TakanonChecked=1"

            urlMatare += "&Amount=" + amount

            if (currency === "USD") {
                urlMatare += "&ForceDollar=1"
            }

            if (payment === "normal") {
                urlMatare += "&NormalDefault=1"
            } else if (payment === "keva") {
                urlMatare += "&KevaDefault=1"
            }

            urlMatare += "&ClientName=" + firstname + "%20" + lastname;
            urlMatare += "&Email=" + email;
            urlMatare += "&Phone=" + phone;
            urlMatare += "&Street=" + address;
            urlMatare += "&City=" + city;
            urlMatare += "&Zeout=" + idnumber;
            if (comment) {
                urlMatare += "&avour=" + comment;
            }


            let win = window.open(urlMatare, '_blank');
            win.focus();
        }
    }

    // ************************************************************
    validate = () => {


        let form = document.querySelector('#f0001');
        let validated = true;

        for (var el of form.elements) {
            if (el.name) {

                let control = document.getElementsByName(el.name);

                if (control[0].hasAttribute("reqfield")) {

                    if (control[0].style) {
                        let stl = control[0].style;

                        let val = control[0].value;
                        //console.log(val);


                        if (val) {
                            stl.borderColor = "limegreen";
                        } else {
                            validated = false;
                            stl.borderColor = "red";
                        }

                    }
                } else {
                    if (control[0].style) {
                        let stl = control[0].style;
                        stl.borderColor = "limegreen";
                    }
                }
            }
            this.setState({ clickState: 1})
        }
        let vmessage = document.getElementsByName("vmessage")[0];
        let arrowPanel = document.getElementsByName("down-arrow-panel-mobile")[0];
        if (validated) {
            // alert alert-success

            vmessage.className = "alert alert-success";
            vmessage.textContent = "הטופס ממולא! תלחץ על תרום עכשיו."
            arrowPanel.className="down-arrow-panel-mobile-show";
            this.setState({formValidated: true})

            //let tashButton = document.getElementById('tashlumButton');
            //tashButton.focus();
        } else {
            vmessage.className = "alert alert-danger";
            vmessage.textContent = "בבקשה מלא את הטופס!";
            arrowPanel.className="down-arrow-panel-mobile-hide";
            this.setState({formValidated: false})
        }

        //console.log(event);
    }

    // ************************************************************
    render() {

        return (
            <div className={mClass("pay-module-mobile", this.props.dir)}>
                <form onSubmit={this.sendForm} onKeyUp={this.validate} name="f0001" id="f0001">
                    <div>
                        <h3>התרומה שלכם</h3>
                        <div className="block-mobile">

                            <div className="container py-5">
                                <div className="row">
                                    <div className="col-md-10 mx-auto">

                                        <div className="form-group row">

                                            <div className="col-sm-12">
									
                                                <input id="inputAmount" type="number" 
                                                       name="amount"
                                                       min="1" max="999999" maxLength="6" placeholder="סכום"
                                                       className="input-control inputAmount-mobile" reqfield="1"
                                                />
												<div className="select-valute" onClick={this.selectOpt}>
												    <div className="valute">{this.state.currArray[this.state.curCurrency]}</div>
                                                    <div className="arrow-wrap">
                                                        <div className={this.state.triangleClass[this.state.clickState]}>
                                                        </div>
                                                    </div>
                                                
                                                
                                                    </div>
                                                    <div id="selectCurrency" className={this.state.selectClass[this.state.clickState]}>
                                                    <span className="select2-container select2-container--default select2-container--open" >
                                                            <span className="select2-dropdown select2-dropdown--below "  >
                                                                <span className="select2-results">
                                                                    <ul className="select2-results__options">
                                                                    {
                                                                        Object.entries(this.state.menu).map((el, idx) => (
                                                                            <li className={this.itemIsHighlighted(idx)}   aria-selected="true" onClick={((e) => this.selectClick(e, idx))} key={idx} data={idx}>
                                                                                <div className="select2-option">
                                                                                    <span>{el[1].descr}</span>&nbsp;
                                                                                    <span className="currency-symbol">{el[1].symb}</span>
                                                                                </div>
                                                                            </li>
                                                                        ))
                                                                    }
                                                            
                                                                    </ul>
                                                                </span>
                                                            </span>
			                                        </span>
                                                    </div>
                                              
                                            </div>
								
                                        </div>
                                        <div className="hidden-mobile" id="hidden-box">

                                            <div className="form-group row">
                                                <div className="col-sm-6">
									
                                                    <input type="text" className="form-control" id="inputFirstname"
                                                           placeholder="שם משפחה" name="firstname" reqfield="1"/>
                                                </div>
												<div className="gap"></div>
                                                <div className="col-sm-6">
									
                                                    <input type="text" className="form-control" id="inputLastname"
                                                           placeholder="שם פרטי" name="lastname" reqfield="1"/>
                                                </div>
                                            </div>
                                            <div className="form-group row">
												<div className="col-sm-6">
								
                                                    <input type="number" className="form-control" id="inputIDNumber"
                                                           placeholder="תעודת זהות" name="idnumber" min="0"
                                                           max="999999999"
                                                           maxLength="9" reqfield="1"/>
                                                </div>
												<div className="gap"></div>
												<div className="col-sm-6">
							
                                                    <input type="text" className="form-control" id="inputCity"
                                                           placeholder="עיר" name="city" reqfield="1"/>
                                                </div>
		
												
                                               
                                                
                                            </div>
                                            <div className="form-group row">
											
												<div className="col-sm-6">
												{/*
                                                    <label htmlFor="inputAddressLine1">כתובת<span
                                                        className="asterisk">*</span></label>
												*/}		
                                                    <input type="text" className="form-control" id="inputAddressLine1"
                                                           placeholder="כתובת" reqfield="1" name="address"/>
                                                </div>
										
												<div className="gap"></div>
                                                <div className="col-sm-6">
								
                                                    <input type="email" className="form-control" id="inputEmail"
                                                           placeholder="מייל" name="email" reqfield="1"/>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <div className="col-sm-6">
									
                                                    <input type="number" className="form-control"
                                                           id="inputContactNumber"
                                                           placeholder="טלפון" reqfield="1" name="phone"/>
                                                </div>
												<div className="gap"></div>
                                                <div className="col-sm-6">
											
                                                    <textarea type="text" className="form-control" id="inputComment"
                                                              placeholder="הערות" rows="3" name="comment"/>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <div className="col-sm-6">
												
                                                    <label>תשלומים</label>
                                                    <div className="radio-control">
                                                        <div className="input-group-prepend">
                                                            <div className="input-group-text">

                                                                <input type="radio" name="payment" value="normal"
                                                                       defaultChecked className="radio-control"/>
                                                                <div className="rc-label">
                                                                    <label>
                                                                        חיוב בודד / תשלומים
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="input-group-prepend">
                                                            <div className="input-group-text">
                                                                <input type="radio" name="payment" value="keva"
                                                                       className="radio-control"/>
                                                                <div className="rc-label">
                                                                    <label>
                                                                        הוראת   &nbsp;קבע &nbsp;&nbsp;  אשראי
																		

                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="alert alert-danger" role="alert" name="vmessage">
                                                בבקשה מלא את הטופס!
                                            </div>
                                            <div className="down-arrow-panel-mobile-hide" name="down-arrow-panel-mobile">
                                                <img src="/img/beit-habad/arrow-down.png" className="down-arrow-mobile" alt="down-arrow"/>
                                            </div>
                                        </div>


                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <input type="submit" value="תרום עכשיו" className="trom-mobile"  id="tashlumButton">
                    </input>

                </form>
            </div>
        )
    }

}

export default PayModule;