import React from 'react';
import './main.css';

import Navbar from '../Navbar/Navbar.js';
import Aim from '../Aim/Aim.js';
import PBar from '../ProgressBar/PBar.js';
import CountDown from '../CountDown/CountDown.js';
//import LoadForm from '../LoadForm/LoadForm.js';
import PayModule from '../PayModule/PayModule';
import YouTube from '../YouTube/YouTube';
import LargeCarousel from '../Carousel/LargeCarousel';
import Footer from '../Footer/Footer';
import Donators from '../PanelDonators/Donators.js';
import HabadRamot from '../HabadRamot/HabadRamot.js';
//import Features from '../Features/Features.js';

import {getYouTube} from '../../Utils/Utils.js';

class Desktop extends React.Component {
render(){
    //let user = (this.props.user === undefined ? "": this.props.user);
	let ytube =  getYouTube("https://www.youtube.com/watch?v=1SMjTMuTpoY");
//DeskTop
    return(
           <div className="desktop" >
				<div className="wrapper">
					<div className="show-background-image">
						<div className="top-components">
						    <Navbar dir={this.props.dir}/>
							    <div className="outer">
									<div className="inner">
									
									<Aim dir={this.props.dir} 				
										summWanted    = {this.props.summWanted}
										summHarvested = {this.props.summHarvested}
										timeTillDate={this.props.dateUntil}										
									/>
									
									<PBar dir={this.props.dir}
										summWanted    = {this.props.summWanted}
										summHarvested = {this.props.summHarvested} 
										procent       = {this.props.procent}
										timeTillDate  = {this.props.dateUntil}									
									/>
									<HabadRamot />
									<CountDown timeTillDate={this.props.dateUntil} dir={this.props.dir}/>
										{/*
									<LoadForm src='https://www.matara.pro/nedarimplus/online/?mosad=7001560' />
										*/}
									<PayModule dir={this.props.dir} />
									
									<Donators dir={this.props.dir} 
										tormimPerson  = {this.props.tormimPerson}
										tormimCount   = {this.props.tormimCount}
									/>
									
									<YouTube dir={this.props.dir} youtube={ytube}/>
									<LargeCarousel slidesCount={this.props.slidesCount} dir={this.props.dir}/>
										{/*
									<Features dir={this.props.dir}/>
										*/}
									<Footer dir={this.props.dir}/>
									 
									</div>
								</div>
						  
						</div>
					</div>
				</div>
			</div>
    )
}
}

export default Desktop;