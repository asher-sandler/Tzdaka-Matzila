import React from 'react';
import './dropmenu.css';

class DropMenu extends React.Component{
	
	constructor(props){
		super(props);
		this.state = {
			menu : [
				{descr: "שקל חדש", symb : "₪"},
				{descr: "דולר אמריקאי", symb : "$"}
			],
			curCurrency : 0
		}
	}
	
	itemIsHighlighted = (idx) => {
		let ret = "select2-results__option";
		if (idx === this.state.curCurrency){
			ret += "  select2-results__option--highlighted";
		}
		return ret;
	}
	
	selectClick = (event, data) => {
		
		this.setState({curCurrency:data})
	}
	
	
	
	render()
	{
		return (
			<div>
			{/*			
			<label dir="rtl">{this.state.menu[this.state.curCurrency].descr}&nbsp;{this.state.menu[this.state.curCurrency].symb}</label>
			*/}
			<span className="select2-container select2-container--default select2-container--open" style={{position: "absolute", top: "90px" ,left: "0px"}}>
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
		)
	}
}

export default DropMenu;