import PropTypes from 'prop-types'
import { useLocation } from 'react-router'
import Btn from './Btn'
const Header = ({ title, onShowAdd, showAdd }) => {
  const location = useLocation()
  return (
    <header className="header">
      {/* style={variableName} majorly used for dynamic styling */}
      <h1 style={headingStyle}>
        {title}
      </h1>
      {location.pathname === '/' && <Btn color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onShowAdd} />}
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
