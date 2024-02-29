import PropTypes from 'prop-types';

const InputField = ({ attribs, className }) => {
  return (
    <>
      <input {...attribs} className={className} />
    </>
  );
};

InputField.propTypes = {
  attribs: PropTypes.object,
  className: PropTypes.string,
};

export default InputField;
