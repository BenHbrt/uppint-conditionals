import './Button.scss';

const Button = ({ name, display, func }) => {

    const reference = name === "Second" || name === "Third" || name === "Mixed"
    
    return (
        <div className={`button button${display === name ? "-selected" : "-unselected"} ${reference ? "reference_button" : ""}`} onClick={func}>
            {name}
        </div>
    )
}

export default Button