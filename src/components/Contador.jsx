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

 <div className="container px-5 py-8 mx-auto">
   <div className="flex flex-col tex-center w-full mb-11">
        <h1 className="sm:tect-3xl text-2xl front-bold title-front mb">
              Cantidad
        </h1>

       <div>
            <div className="m:tect-3xl text-5xl front-bold title-front mb" >
               <button  className="btn btn-outline-danger text-center" onClick={handleSubstract}>-</button>
               <span>    {count}    </span>
               <button  className="btn btn-outline-success text-center" onClick={handleAdd}>+</button>   
            </div>
          <div>
            <button className="btn btn-outline-warning text-center rounded-5" onClick={()=>props.onAdd(count)}>Agregar al carrito</button>   
          </div>
       </div>
   </div>
 </div>



   )
}
export default Contador;