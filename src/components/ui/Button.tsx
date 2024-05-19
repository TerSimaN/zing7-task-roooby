const Button = ({ className = '', text = '', hasIcon = '', iconColor = '', iconMargin = '' }) => {
  return (
    <button className={`${(hasIcon === 'true') ? `flex items-center` : ''} ${(className !== '') ? `${className}` : ''}`}>
      {text}
      <svg
        className={`${(hasIcon === 'true') ? `block` : `hidden`} ${(iconColor !== '') ? `${iconColor}` : ''} ${(iconMargin !== '') ? `${iconMargin}` : ''}`}
        width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
      >
        <path fillRule="evenodd" clipRule="evenodd" d="M8 16.59L12.9447 12L8 7.41L9.52227 6L16 12L9.52227 18L8 16.59Z" />
      </svg>
    </button>
  )
}

export default Button