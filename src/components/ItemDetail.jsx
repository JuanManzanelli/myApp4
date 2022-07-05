import Contador from "./Contador";

const ItemDetail = ({ colchon }) => {

    return (
   <div className="card  bg-dark">
       <img 
            alt={colchon.title}
            className="image objetc-contain bg-placeholder h-60 rounded w-full objetc-center mn-6"
            src={colchon.imgUrl}
        />
       <div className="card-body text-light">
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

       {/*<div> 
       <a href="#!" className="btn btn-outline-secondary rounded-0">
            Detalle
        </a> 
        </div>*/}

        <hr></hr>
       
        <a href="#!" className="btn btn-outline-secondary rounded-0">
            Comprar
        </a> 
        <hr/>
        <br/>
        
        <Contador stock={colchon.stock} initial={1} />    
        
        
     </div>
    </div>
  );
};

export default ItemDetail;