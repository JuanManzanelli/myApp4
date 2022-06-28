import { useState } from "react";

function Contador(){
     const [num, setNum] = useState(0);
     

     const suma = ()  => {
        if(num<10){ 
        setNum(num + 1);
        }
     }

    const resta = ()  => {
        if(num>0){
         setNum(num - 1);
             }  
        } 
    
    
    return (
        <>
        <p>{num}</p>
        <button onClick={suma}>Sumar!</button>
        <button onClick={resta}>Resta!</button>
        </>
    )
}
export default Contador;