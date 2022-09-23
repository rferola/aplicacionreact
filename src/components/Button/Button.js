const Button = ({ label, background, color }) => {
    return <button
            style={{
                    background: background,
                    color: color,
            }
            }    
    >{label}</button>
}
export default Button