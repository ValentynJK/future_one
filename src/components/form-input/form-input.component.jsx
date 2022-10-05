import './form-input.styles.scss'

const FormInput = ({ label, className, forLabel, ...otherProps }) => {
  return (
    <div className='group'>
      <input className={`form-input ${className}`} {...otherProps} />
      {label && (
        <label
          for={forLabel}
          className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
          {label}
        </label>
      )
      }
    </div >
  )
};

export default FormInput;