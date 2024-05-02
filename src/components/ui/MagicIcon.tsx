const MagicIcon = ({ fillColor = '' }) => {
    return (
        <div>
            <svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M29.1435 0V12.2558V0Z" fill={fillColor} />
                <path d="M29.1435 0V12.2558" stroke={fillColor} strokeWidth="3.06395" />
                <path fillRule="evenodd" clipRule="evenodd" d="M12.271 29.1075H0H12.271Z" fill={fillColor} />
                <path d="M12.271 29.1075H0" stroke={fillColor} strokeWidth="3.06395" />
                <path fillRule="evenodd" clipRule="evenodd" d="M51.0779 7.2002L42.4882 15.7792L51.0779 7.2002Z" fill={fillColor} />
                <path d="M51.0779 7.2002L42.4882 15.7792" stroke={fillColor} strokeWidth="3.06395" />
                <path fillRule="evenodd" clipRule="evenodd" d="M15.7989 42.4355L7.2092 51.0146L15.7989 42.4355Z" fill={fillColor} />
                <path d="M15.7989 42.4355L7.2092 51.0146" stroke={fillColor} strokeWidth="3.06395" />
                <path fillRule="evenodd" clipRule="evenodd" d="M15.7989 15.7792L7.2092 7.2002L15.7989 15.7792Z" fill={fillColor} />
                <path d="M15.7989 15.7792L7.2092 7.2002" stroke={fillColor} strokeWidth="3.06395" />
                <path fillRule="evenodd" clipRule="evenodd" d="M24.2776 30.8362L30.7852 24.3366L72 65.5005L65.4924 72L24.2776 30.8362Z" stroke={fillColor} strokeWidth="3.06392" />
                <path fillRule="evenodd" clipRule="evenodd" d="M34.3582 40.9167L40.8649 34.4162L72 65.5004L65.4934 72.0009L34.3582 40.9167Z" fill={fillColor} stroke={fillColor} strokeWidth="3.06392" />
            </svg>
        </div>
    )
}

export default MagicIcon