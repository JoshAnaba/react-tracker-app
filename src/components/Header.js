import PropTypes from 'prop-types'
import Btn from './Btn'
const Header = ({ title }) => {
  const onClick = (e) => {
    console.log(e, {
      yo: 'f '
    })
  }
  return (
    <header className="header">
      {/* style={variableName} majorly used for dynamic styling */}
      <h1 style={headingStyle}>
        {title}
      </h1>
      <Btn color="green" text="Add" onClick={onClick} />
    </header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker'
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

// CSS in JS
const headingStyle = {}

export default Header
