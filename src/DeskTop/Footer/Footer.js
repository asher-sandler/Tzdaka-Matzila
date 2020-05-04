import React from 'react';
import './Footer.css';
// import footerLogo from './footer-logo.png'
// import facebookIcon from './facebook-icon.svg'
// import linkedinIcon from './linkedin-icon.svg'
// import twitterIcon from './twitter-icon.svg'
// import youtubeIcon from './youtube-icon.svg'

class Footer extends React.Component {
	render (){
    return (
        <div className="footer-desktop" dir={this.props.dir}>
            <table className="footer-table">
                <tbody>
                <tr>
                    <td className="titles">
                        <img className="footer-logo" src="/img/beit-habad/habad-ramot-1.png" alt="Beit Habad Ramot" />
                    </td>
					{/*
                    <td  className="center-column titles">
                        <strong>Download</strong>
                    </td>
					
                    <td className="titles">
                        <strong>Social Media</strong>
                    </td>
					*/}
                </tr>
				{/*
                <tr>
                    <td>
                        <a className="footer-link" href="https://beithabadramot" target="_blank" rel="noopener noreferrer" title="To Site">Beit Habad Ramot</a>
                    </td>
					{/*
                    <td className="center-column">
                        <a className="app-link" href="https://apps.apple.com/us/app/stops-com/id1349673464" rel="noopener noreferrer">iOS App</a>
                    </td>
					*/}
					{/*
                    <td>
                        <div className="social-media">
                        <table className="social-media-table">
                        <tbody>
                            <tr className="social-media-row">
                                <td>
                                    <a href="https://www.facebook.com/beithabadramot/" target="_blank" rel="noopener noreferrer" title="Facebook">
                                        <i className="fa fa-facebook" aria-hidden="true"></i>
                                    </a>
                                </td>
                                <td>
                                    <a href="https://whatsapp" target="_blank" rel="noopener noreferrer" title="WhatsApp">
                                        <i className="fa fa-whatsapp" aria-hidden="true"></i>
                                    </a>
                                </td>
                                <td>
                                    <a href="https://twitter.com/bethabadramot" target="_blank" rel="noopener noreferrer" title="Twitter">
                                        <i className="fa fa-twitter" aria-hidden="true"></i>
                                    </a>
                                </td>
                                <td>
                                    <a href="https://www.youtube.com/watch?v=1SMjTMuTpoY&feature=emb_logo" target="_blank" rel="noopener noreferrer" title="YouTube">
                                        <i className="fa fa-youtube" aria-hidden="true"></i>
                                    </a>
                                </td>
								<td>
                                    <a href="https://telegram/bethabadramot" target="_blank" rel="noopener noreferrer" title="Telegram">
                                        <i className="fa fa-telegram" aria-hidden="true"></i>
                                    </a>
                                </td>
								
                            </tr>
                            </tbody>
                        </table>
                        </div>
                    </td>
                </tr>
				/*}
				{/*
                <tr>
				
                    <td>
                        <a className="footer-link" href="https://blog.stops.com/" target="_blank" rel="noopener noreferrer">blog.stops.com</a>
                    </td>
                    <td className="center-column">
                        <a className="app-link" href="https://play.google.com/store/apps/details?id=com.stops.dev">Android App</a>
                    </td>
                    <td />
                </tr>
				
                <tr>
                    <td>
                        <a className="footer-link" href="https://beit-habad-ramot.com/" target="_blank" rel="noopener noreferrer">Beit Habad Ramot</a>
                    </td>
                    <td />
                    <td/>
                </tr>
				*/}
				<tr>
					
                    <td className="legal" dir="ltr">
						<a href="https://www.google.ru/maps/@31.8179396,35.1945359,3a,75y,243.95h,87.54t/data=!3m6!1e1!3m4!1sAF1QipNbLcwA45Gng9NMibygzDvQbxofwtIH5PlNVM2J!2e10!7i11258!8i5629" target="_blank" rel="noopener noreferrer" title="Beit Habad Ramot">
						<i className="fa fa-home little-phone" aria-hidden="true"></i>
                       קניון רמות, גולדה מאיר 255 ירושלים 
					   </a>
                    </td >
								
				</tr>
				
				<tr>
					
                    <td className="legal" dir="ltr">
						<i className="fa fa-phone little-phone" aria-hidden="true"></i>
                       +972 58-770-6052
                    </td >
								
				</tr>
				
				<tr>
					
                    <td className="legal" dir="ltr">
						<a href="mailto:bcr770@gmail.com" target="_blank" rel="noopener noreferrer" title="Send Mail">
                                        
                               
						<i className="fa fa-envelope-o little-phone" aria-hidden="true"></i>
                       bcr770@gmail.com
					   
                        </a>
                    </td >
								
				</tr>				
                <tr>
				
                    <td className="legal" dir="ltr">
                        ©&nbsp;Beit Habad Ramot. 2020
                    </td >
					
					{/*
                    <td className="center-column" />
                    <td className="legal">
                        <a className="footer-link" href="https://legal.stops.com/privacypolicy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
                        &nbsp;& <a className="footer-link" href="https://legal.stops.com/termsofuse/" target="_blank" rel="noopener noreferrer">Terms of Use</a>
                    </td>
					*/}
                </tr>
                </tbody>
            </table>
        </div>
    )}
}

export default Footer;