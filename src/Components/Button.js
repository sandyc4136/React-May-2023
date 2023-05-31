import React from 'react'

const Button = (props) => {
    return (
        <div>
            <button style = {{backgroundColor : props.buttonColor}}> 
            {props.buttonText} 
            </button>
            {props.children}
        </div>
    )
}

export default Button;