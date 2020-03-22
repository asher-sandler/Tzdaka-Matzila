import React from 'react';
import Desktop from './DeskTop/Main/main.js';
import Mobile from './Mobile/Main/main.js';
import {getGoogleTable, getLangData} from './dbUtils/db.js';
//import {getConfigData} from './dbUtils/db.js';
import './App.css';

//import * as fs from 'fs';

//const mongoose = require("mongoose");
//const { Schema, connect } = require("mongoose");


class  App extends React.Component {
  constructor(props) {
		//#region Asher.DataSet dddd
        super(props);
        this.state = {
            isOpen: false,
            width: window.innerWidth,
            
            lhkbh   : "בס''ד",

            
            user : null,  
            password: null,
            port: null,
            mongoDBURL : null,
            

            version : "2020-03-23",
            developer : "Charity! Asher Malkiel Sandler <asher.sandler770@gmail.com>",
			direction : "rtl",
			slidesCount : 10,
			dateUntil  : undefined,
			summWanted : undefined,
			summHarvested : undefined,
			langArray    : undefined
			
        }

        //getConfigData('/data/config.json',this.onLoadConfig);
		
		getGoogleTable(this.onLoadGoogleTable);
		
		getLangData('en',this.onLoadLang);
		
       

        //this.expressConnect();
   
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
    let elem = document.getElementById('root');
	elem.style.direction=this.state.direction;
	
	


}

componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);

}

  handleWindowSizeChange = () => {
    this.setState({width: window.innerWidth});
}


onLoadConfig = (data) => {
  this.setState({user: data.user,
                    port: data.port,
                    password: data.password,
                    mongoDBURL : data.mongodburl,
					dateUntil  : data.dateUntil,
					summWanted : data.summWanted,
					summHarvested : data.summHarvested 
					
  })
}


onLoadGoogleTable = (data) => {
	let conf = data.feed.entry[0];
	//console.log('Google Table: ', data.feed.entry);
	//console.log('Conf Table: ', conf);	
	let dUntil = conf.gsx$dateuntil['$t'];
	let sWant  = conf.gsx$summwanted['$t'];
	let sHarv  = conf.gsx$summharvested['$t'];
	
	//console.log(dUntil,sWant,sHarv);
	
	this.setState({
			dateUntil     : dUntil,
			summWanted    : sWant,
			summHarvested : sHarv 			
	})
}


onLoadLang = (data) => {
	
	this.setState(
	{langArray : data}
	);
	//console.log('Lang: ', data);
	//console.log('Lang strings: ', data.strings);
	
	//console.log('Lang strings S003: ', new Map(data.strings[0]));
	
	
}
/*
 expressConnect = async () =>{
  
  try{
     connect(this.state.mongoDBURL, {
      useNewUrlParser:true
    });
  
  }
  catch (e)
  {
    console.log('Server Error', e.message)
    //process.exit(1);
  }
  }
  
*/
  render(){
    const {width} = this.state;
    const isMobile = width <= 700;

    
    if (isMobile){
          return (
            <Mobile user={this.state.user} dir={this.state.direction} 
				slidesCount   = {this.state.slidesCount} 
				dateUntil     = {this.state.dateUntil}
				summWanted    = {this.state.summWanted}
				summHarvested = {this.state.summHarvested}
				langArray	  = {this.state.langArray}
				/>
          )
    }
    else
    {
          return (
          <Desktop  user={this.state.user} dir={this.state.direction} 
				slidesCount   = {this.state.slidesCount} 
				dateUntil     = {this.state.dateUntil}
				summWanted    = {this.state.summWanted}
				summHarvested = {this.state.summHarvested}
				langArray	  = {this.state.langArray}
				/>
          )
    }
  
   }
}

export default App;
