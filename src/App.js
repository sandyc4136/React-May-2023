import React from 'react';
import Button from './Components/Button';

export const Hello = ()=>{
    // let a=10, b=5

    return (
    <div>
        {/* <h2 style={{color:"tomato", textAlign:"center"}}>The value of a = {a}</h2>
        <h1 class="heading"  > Hello world</h1>
        <p> How are You? </p>
        <p> { a>b? "a is greater " : "b is greater " }</p> */}
        <Button 
        buttonText="Mango"
        buttonColor="yellow"
       />

        <Button
         buttonText="Apple"
         buttonColor="red"
         />

        <Button
         buttonText="Orange"
         buttonColor="orange"
         >
         <p> HEY this is Iphone </p>

        </Button>
         <Button 
         buttonText="Kiwi"
         buttonColor="tomato"
         >

         <h1 className="heading1"> This is Sandip </h1>
         <p> I am exploring new things </p>

        </Button>
    </div>
    )
}

// export default Hello   // "default export"