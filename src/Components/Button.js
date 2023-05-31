import React from 'react'

const Button = ({buttonColor,buttonText, children}) => {
    return (
        <div>
            <button style = {{color : buttonColor}}> 
            {buttonText} 
            </button>
            {children}
        </div>
    )



    // return (
    //     <div>
    //         <button style = {{backgroundColor : props.buttonColor}}> 
    //         {props.buttonText} 
    //         </button>
    //         {props.children}
    //     </div>
    // )
}

export default Button;