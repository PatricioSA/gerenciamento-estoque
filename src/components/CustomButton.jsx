export default function CustomButton({title, bgColor, color}) {
    return (
        <button 
            style={{
                color: color || '#fff',
                backgroundColor: bgColor,
                padding: '1rem',
                borderRadius: '.5rem',
                border: 0,
            }}
        >
            {title}
        </button>
    )
}