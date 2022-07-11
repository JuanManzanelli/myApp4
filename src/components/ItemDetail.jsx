import Contador from "./Contador";

const ItemDetail = ({ colchon }) => {

    return (
   <div className="card  bg-dark object-center">
      
       <div className="card-body text-light object-center">
      <div>
       <h4 className="card-title">{colchon.title}</h4>
       </div>

       <div>
       <p className="card-text text-secondary text-center">{colchon.color}</p>
       </div>

       <div>
       <p className="card-text text-secondary text-center">{colchon.price}</p>
       </div>

       <div>
       <p className="card-text text-secondary text-center">{colchon.stock}</p>
       </div>

       

        <hr></hr>
       
        {<a href="#!" className="btn btn-outline-secondary text-center rounded-0">
            Comprar
    </a>}
        <hr/>
        <br/>
        <div class=" text-center">
        <Contador stock={colchon.stock} initial={1} />   
        </div>
 
        
        
     </div>
    </div>
  );
};

export default ItemDetail;