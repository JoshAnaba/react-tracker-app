import React from 'react'
import props from 'prop-types'

const Btn = ({ color, text, onClick }) => {
  return <button className="btn primary-btn" style={{backgroundColor:color}} onClick={onClick}>{text}</button>
}

Btn.defaultProps = {
  color: 'steelBlue'
} 

Btn.propTypes = {
  text: props.string,
  color: props.string,
  onClick: props.func
  // in react, functions are also passed as props, not $emited like in vue
}

export default Btn
