import { Link } from "react-router-dom";

const AppProductCard = (props) => {
     
    return ( <div className='card product-card'  >
               <Link to={"/details/"+props.product.id}>
                <img src={props.product.image} class="card-img-top" alt="..."/>
                <div class="card-body">
                <h5 class="card-title">{props.product.name}</h5>
                <p class="card-text">{props.product.price}</p>
                <a href="#" class="btn btn-primary btn-sm">Add To Cart</a>
                </div>
                </Link>
            </div> 
            );
}
 
export default AppProductCard;