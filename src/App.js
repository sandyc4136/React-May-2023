import React from 'react';
import Button from './Components/Button';

export const Hello = ()=>{
    let a=10, b=5

    return (
    <div>
        <h2 style={{color:"tomato", textAlign:"center"}}>The value of a = {a}</h2>
        <h1 class="heading"  > Hello world</h1>
        <p> How are You? </p>
        <p> { a>b? "a is greater " : "b is greater " }</p>
        <Button/>
        <Button/>
        <Button/>
    </div>
    )
}

// export default Hello   // "default export"