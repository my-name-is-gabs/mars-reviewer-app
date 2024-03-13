import PropTypes from 'prop-types'

const Button = ({ children, attribs, className, onClick }) => {
  return (
    <button {...attribs} className={className} onClick={onClick}>
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.any,
  attribs: PropTypes.object,
  className: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button
