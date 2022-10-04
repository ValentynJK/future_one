import './button.styles.scss';

// holds general button styling types
const buttonTypes = {
  standard: 'standard',
  navigation: 'navigation',
  subscribe: 'subscribe'
}

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button className={`button-container ${buttonTypes[buttonType]}`} {...otherProps}>
      {children}
    </button>
  )
}

export default Button