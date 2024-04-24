import PropTypes from 'prop-types'

export default function Input({type, placeholder, id, value, onChange}) {
  return (
    <>
    <input
    type={type}
    placeholder={placeholder}
    id={id}
    value={value}
    onChange={onChange}
    />
    </>
  )
}

Input.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
    id: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string,
}