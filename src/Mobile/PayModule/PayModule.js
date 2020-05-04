import React, {Component} from 'react';

import './PayModule.css';
//import visa from './visa.png';

//import visa from './cc.png';


import {mClass} from '../../Utils/Utils.js';
//import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
//import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';


class PayModule extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currency: "ILS",
            amount: 10,
            flag: ["/img/beit-habad/isrflag.png",
                "/img/beit-habad/usflaf.png "],
			currArray: ["₪","$"],	
            currentFlag: 0,
            formValidated: false
        }


    }


    componentDidMount() {
        this.validate();
    }

    sendForm = (event) => {
        event.preventDefault();
        let box = document.querySelector('#hidden-box');
        box.className = "shown-mobile";
        if (this.state.formValidated) {


            let elements = event.target.elements;

            let amount = elements["amount"].value;
            let currency = elements["currency"].value;
            let payment = elements["payment"].value;

            let firstname = elements["firstname"].value;
            let lastname = elements["lastname"].value;

            let address = elements["address"].value;
            let idnumber = elements["idnumber"].value;
            let city = elements["city"].value;


            let email = elements["email"].value;
            let phone = elements["phone"].value;
            let comment = elements["comment"].value;

            //console.log(elements);
            //console.log(currency);
            //console.log(payment);

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

    changeCurrency = (event) => {
        let currncy = event.target.value;
        //console.log(currncy);
        let flagidx = 0
        if (currncy === "USD") {
            flagidx = 1;

        }
        this.setState({currentFlag: flagidx});
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
        }
        let vmessage = document.getElementsByName("vmessage")[0];
        let arrowPanel = document.getElementsByName("down-arrow-panel-mobile")[0];
        if (validated) {
            // alert alert-success

            vmessage.className = "alert alert-success";
            vmessage.textContent = "הטופס ממולא! תלחץ על תרום עכשיו."
            arrowPanel.className="down-arrow-panel-mobile-show";
            this.setState({formValidated: true})
        } else {
            vmessage.className = "alert alert-danger";
            vmessage.textContent = "בבקשה מלא את הטופס!";
            arrowPanel.className="down-arrow-panel-mobile-hide";
            this.setState({formValidated: false})
        }

        //console.log(event);
    }


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

                                            <div className="col-sm-6">
											{/*
												<div>
                                                    <label htmlFor="inputAmount">סכום<span className="asterisk">*</span></label>
                                                </div>
											*/}	
												
												{/*defaultValue={this.state.amount}*/}
                                                <input id="inputAmount" type="number" 
                                                       name="amount"
                                                       min="1" max="999999" maxLength="6" placeholder="סכום"
                                                       className="input-control inputAmount-mobile" reqfield="1"
                                                />
												<div className="select-valute">
												<div className="valute">{this.state.currArray[this.state.currentFlag]}</div>
                                                <select id="selectCurrency" name="currency" className="select-control"
                                                        onChange={this.changeCurrency}>
                                                    <option value="ILS" selected>

                                                        שקל חדש
                                                        ₪

                                                    </option>
                                                    <option value="USD">

                                                        דולר אמריקאי
                                                        $

                                                    </option>
                                                </select>
												
												</div>

                                                <div className="valid-feedback">
                                                    Ok!
                                                </div>
                                                <div className="invalid-feedback">
                                                    סכום!
                                                </div>
                                            </div>
											
											

											{/*
											<div className="gap"></div>
                                                <div>
                                                    <label htmlFor="selectCurrency">מטבע</label>
                                                </div>
											*/}	
												{/*
                                                <div className="flag">
                                                    <img src={this.state.flag[this.state.currentFlag]} alt="Currency"
                                                         className="image-flag"/>
                                                </div>
												*/}


                                        </div>
                                        <div className="hidden-mobile" id="hidden-box">

                                            <div className="form-group row">
                                                <div className="col-sm-6">
												{/*
												<label htmlFor="inputFirstname">שם משפחה<span
                                                        className="asterisk">*</span></label>
												*/}		
														
                                                    <input type="text" className="form-control" id="inputFirstname"
                                                           placeholder="שם משפחה" name="firstname" reqfield="1"/>
                                                </div>
												<div className="gap"></div>
                                                <div className="col-sm-6">
												{/*
                                                    <label htmlFor="inputLastname">שם פרטי<span
                                                        className="asterisk">*</span></label>
												*/}		
                                                    <input type="text" className="form-control" id="inputLastname"
                                                           placeholder="שם פרטי" name="lastname" reqfield="1"/>
                                                </div>
                                            </div>
                                            <div className="form-group row">
												<div className="col-sm-6">
												{/*	
                                                    <label htmlFor="inputIDNumber">תעודת זהות<span
                                                        className="asterisk">*</span></label>
												*/}		
                                                    <input type="number" className="form-control" id="inputIDNumber"
                                                           placeholder="תעודת זהות" name="idnumber" min="0"
                                                           max="999999999"
                                                           maxLength="9" reqfield="1"/>
                                                </div>
												<div className="gap"></div>
												<div className="col-sm-6">
												{/*
                                                    <label htmlFor="inputCity">עיר<span
                                                        className="asterisk">*</span></label>
												*/}		
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
												{/*
                                                    <label htmlFor="inputEmail">מייל<span
                                                        className="asterisk">*</span></label>
												*/}		
                                                    <input type="email" className="form-control" id="inputEmail"
                                                           placeholder="מייל" name="email" reqfield="1"/>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <div className="col-sm-6">
												{/*
                                                    <label htmlFor="inputContactNumber">טלפון<span
                                                        className="asterisk">*</span></label>
												*/}		
                                                    <input type="number" className="form-control"
                                                           id="inputContactNumber"
                                                           placeholder="טלפון" reqfield="1" name="phone"/>
                                                </div>
												<div className="gap"></div>
                                                <div className="col-sm-6">
												{/*
                                                    <label htmlFor="inputComment">הערות</label>
												*/}	
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

                    <input type="submit" value="תרום עכשיו" className="trom-mobile">
                    </input>

                </form>
            </div>
        )
    }

}

export default PayModule;