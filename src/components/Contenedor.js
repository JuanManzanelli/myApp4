import { useState } from "react";
import Hello from "./Hello";


function Contenedor(){
    const [name, setName ]    = useState('Con Stock')
   return (
      <>
        <Hello name={name}></Hello>
         {<button onClick={() => setName("Sin Stock")}>Click me!</button> }
      </>
  ) 
}
export default Contenedor;