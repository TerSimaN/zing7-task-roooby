const LaptopIcon = ({ fillColor = '' }) => {
    return (
        <div>
            <svg width="76" height="60" viewBox="0 0 76 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M14.5217 2H61.4783C64.9217 2 67.7391 4.8 67.7391 8.22222V39.3333H8.26086V8.22222C8.26086 4.8 11.0783 2 14.5217 2Z" fill="white" stroke={fillColor} strokeWidth="3.13043" />
                <path d="M8.26087 39.3333L2 51.7777V57.9999H74V51.7777L67.7391 39.3333" stroke={fillColor} strokeWidth="3.13043" />
                <path d="M28.6087 51.7778H47.3913" stroke={fillColor} strokeWidth="3.13043" />
            </svg>
        </div>
    )
}

export default LaptopIcon