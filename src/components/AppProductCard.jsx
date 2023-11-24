import { Link } from "react-router-dom";

const AppProductCard = () => {
    return ( <div className='card product-card'  >
               <Link to="/details">
                <img src="..." class="card-img-top" alt="..."/>
                <div class="card-body">
                <h5 class="card-title">Product Title</h5>
                <p class="card-text">Price</p>
                <a href="#" class="btn btn-primary btn-sm">Add To Cart</a>
                </div>
                </Link>
            </div> 
            );
}
 
export default AppProductCard;