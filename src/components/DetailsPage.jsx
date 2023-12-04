import { useParams } from "react-router-dom";
import AppButton from "./Appbutton";

const DetailsPage = (props) => {
    //const id = 1;
    // const paramobject = useParams();
    // const id = paramobject.id;
    // const userId = paramobject.userId;
    const {id,userId} = useParams();
    const product = props.productList.find(p => p.id ==  id);
    return (  
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <img className="w-100" src={product.image}/>
                </div>
                <div className="col">
                    <h2>{product.name}</h2>
                    <p>{product.price}</p>
                    <AppButton title="Add To Cart"/>
                </div>
            </div>
        </div>
     );
}
 
export default DetailsPage;