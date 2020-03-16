/*
INIT: ensure Babel/Eslint/Flow is configured for ES Class Fields & Static Properties
JSX USAGE: <Iframe src='http://web.site' onLoad={myOnloadFunction}/>
*/
import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import './loadform.css'

class LoadForm extends Component {

  // static propTypes: Object = {
    // src: PropTypes.string.isRequired,
    // onLoad: PropTypes.func,
  // }

  componentDidMount () {
    let iframe = ReactDOM.findDOMNode(this.refs.iframe)
    iframe.addEventListener('load', this.props.onLoad);
  }

  render () {
    const iframeStyle = {
      width: '900px',
      height: '100%',
      border: '0',

	alignItems: 'center',
	justifyContent: 'center',

    }

    return (
	<div className="loadform">
      <iframe 
        ref="iframe"
        {...this.props}
        frameBorder={'0'}
        width={'100%'}
        height={'100%'}
        style={iframeStyle}
      />
	  </div>
    )
  }

}

export default LoadForm