import React from 'react';
//import moment from 'moment';
import {mClass,daysLag, hoursLag, mnsLag, secsLag, formatDate, pad} from '../../Utils/Utils.js';
import './countdown.css';

class CountDown extends React.Component {
    state = {
        days: undefined,
        hours: undefined,
        minutes: undefined,
        seconds: undefined,
		untilDate: undefined
    };
	
	
	 static getDerivedStateFromProps(props, state) {
		 return({untilDate: new Date(props.timeTillDate),
				 untilStr:  formatDate(props.timeTillDate)
				 
		 })
	 }
	 


    componentDidMount() {
		

        this.interval = setInterval(() => {
			let nowDate = new Date();
			var dLag = daysLag(nowDate, this.state.untilDate);
			var hLag = hoursLag(nowDate, this.state.untilDate);
			var mLag = mnsLag(nowDate, this.state.untilDate);
			var sLag = secsLag(nowDate, this.state.untilDate);

            //const { timeTillDate, timeFormat } = this.props;
 
            const days = dLag;
            const hours = hLag; //countdwn.format('HH') ;
            const minutes = mLag;// countdwn.format('mm') ;
            const seconds = pad(sLag,2); //countdwn.format('ss') ;

            this.setState({ days, hours, minutes, seconds });
        }, 1000);
    }

    componentWillUnmount() {
        if (this.interval) {
            clearInterval(this.interval);
        }
    }
	
	

    render() {
        const { days, hours, minutes, seconds } = this.state;

        // Mapping the date values to radius values
		
        //const daysRadius = mapNumber(days, 30, 0, 0, 360);
        //const hoursRadius = mapNumber(hours, 24, 0, 0, 360);
        //const minutesRadius = mapNumber(minutes, 60, 0, 0, 360);
        //const secondsRadius = mapNumber(seconds, 60, 0, 0, 360);
/*
        if (!seconds) {
            return null;
        }
*/
		//console.log(days,hours,minutes,seconds);
		if (days === 0 && hours === 0 && minutes === 0  && seconds === "00"){
			return (<div className={mClass("countdown-mobile",this.props.dir)}>
						<h1>ספירה לאחור הסתיימה</h1>
					</div>);
		}
		else
		{	
        return (
            <div className={mClass("countdown-mobile",this.props.dir)}>
                
				{/*
				<h1>ספירה לאחור</h1>
				<h1>{this.state.untilStr}</h1>
				*/}
                <div className="countdown-mobile-wrapper">
                    {
						(
                        <div className="countdown-mobile-item">
						{/*
                            <SVGCircle radius={daysRadius} />
						*/}	
                            {days}
                            <span>ימים</span>
                        </div>
						)
					}
                    { (
                        <div className="countdown-mobile-item">
						{/*
                            <SVGCircle radius={hoursRadius} />
						*/}	
                            {hours}
                            <span>שעה</span>
                        </div>
                    )}
                    { (
                        <div className="countdown-mobile-item">
						{/*
                            <SVGCircle radius={minutesRadius} />
						*/}	
                            {minutes}
                            <span>דקות</span>
                        </div>
                    )}
                    {  (
                        <div className="countdown-mobile-item">
						{/*
                            <SVGCircle radius={secondsRadius} />
						*/}	
                            {seconds}
                            <span>שניות</span>
                        </div>
                    )}
                </div>
            </div>
        )
		}
    }
}
/*
const SVGCircle = ({ radius }) => (
    <svg className="countdown-svg">
        <path
            fill="none"
            stroke="#333"
            strokeWidth="4"
            d={describeArc(50, 50, 48, 0, radius)}
        />
    </svg>
);
*/


// From StackOverflow: https://stackoverflow.com/questions/5736398/how-to-calculate-the-svg-path-for-an-arc-of-a-circle

/*
function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
    var angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

    return {
        x: centerX + radius * Math.cos(angleInRadians),
        y: centerY + radius * Math.sin(angleInRadians)
    };
}
*/


/*
function describeArc(x, y, radius, startAngle, endAngle) {
    var start = polarToCartesian(x, y, radius, endAngle);
    var end = polarToCartesian(x, y, radius, startAngle);

    var largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';

    var d = [
        'M',
        start.x,
        start.y,
        'A',
        radius,
        radius,
        0,
        largeArcFlag,
        0,
        end.x,
        end.y
    ].join(' ');

    return d;
}
*/
// From StackOverflow: https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers


/*
function mapNumber(number, in_min, in_max, out_min, out_max) {
    return (
        ((number - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
    );
}
*/
export default CountDown;