import PropTypes from 'prop-types'

const Header = ({title}) => {
  return (
    <header className="header">
      {/* style={variableName} majorly used for dynamic styling */}
      <h1 style={headingStyle}>
        {title}
      </h1>
      <input type="button" value="Add" className="primary-btn btn" />
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
