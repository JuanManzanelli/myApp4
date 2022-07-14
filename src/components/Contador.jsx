import React, { useState } from "react";



function Contador(props){
     const [count, setCount] = useState(props.initial);
     

function handleAdd(){
    if ( count <props.stock) setCount( count + 1 );
}


function handleSubstract(){
    if ( count > 1 ) setCount( count - 1 );
}




   return (

 <div class="container px-5 py-8 mx-auto">
   <div class="flex flex-col tex-center w-full mb-11">
        <h1 class="sm:tect-3xl text-2xl front-bold title-front mb">
              Cantidad
        </h1>

       <div>
            <div>
               <button onClick={handleSubstract}>-</button>
               <span>    {count}    </span>
               <button onClick={handleAdd}>+</button>   
            </div>
          <div>
            <button onClick={()=>props.onAdd(count)}>Agregar al carrito</button>   
          </div>
       </div>
   </div>
 </div>



   )
}
export default Contador;