import { Link } from 'react-router-dom';
import './Button.css'; 

function Button({ label, variant,type, onClick}) {
    const className = `custom-button ${variant}-button`;

    return (
       <button  type={type} className= {className} onClick={onClick}>
            {label}
        </button>
    );
}

export default Button;
