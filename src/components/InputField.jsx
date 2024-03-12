import PropTypes from 'prop-types'

const InputField = ({ attribs, className, onBlur, onChange }) => {
  return (
    <>
      <input
        {...attribs}
        className={className}
        onBlur={onBlur}
        onChange={onChange}
      />
    </>
  )
}

InputField.propTypes = {
  attribs: PropTypes.object,
  className: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
}

export default InputField
