import PropTypes from 'prop-types'

CustomButton.propTypes = {
    title: PropTypes.string,
    bgColor: PropTypes.any,
    color: PropTypes.any,
    marginRight: PropTypes.any,
    marginBottom: PropTypes.any,
}

export default function CustomButton({title, bgColor, color, marginRight, marginBottom}) {
    return (
        <button 
            style={{
                color: color || '#fff',
                backgroundColor: bgColor,
                padding: '1rem',
                borderRadius: '.5rem',
                border: 0,
                marginRight: marginRight || 0,
                marginBottom: marginBottom || 0,
                cursor: 'pointer'
            }}
        >
            {title}
        </button>
    )
}