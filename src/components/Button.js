import './Button.scss';

const Button = ({ name, display, func }) => {
    return (
        <div className={`button button${display === name ? "-selected" : "-unselected"}`} onClick={func}>
            {name}
        </div>
    )
}

export default Button