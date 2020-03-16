import React, { Component } from 'react';
import {mClass, moneyFormat} from '../../Utils/Utils.js';
import done from './done.png';
import './Aim.css';

class Aim extends Component {
    

    render() {

        // <i class="fas fa-check"></i>

        return (
            <div className={mClass("aim-mobile",this.props.dir)}>
                <div className="container">
                    <h1 className="summ-aim">{moneyFormat(this.props.summWanted)} ₪ סכום יעד</h1>
					<h1 className="summ-harvested">{moneyFormat(this.props.summHarvested)} ₪</h1>
					<img className="google-play" src={done} alt="Done"/>
                    
                    
                </div>
            </div>
        );
    }
}

export default Aim;