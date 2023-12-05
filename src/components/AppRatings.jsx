import {Star,StarFill, StarHalf} from "react-bootstrap-icons"

const AppRatings = (props) => {
    const unfilledstar = 5-(props.rating);
    var tempArray = Array(4);
    return ( <>
           {Array.from({ length: props.rating }, (r) => <StarFill size={20}/>)}
           {Array.from({ length: unfilledstar }, (r) => <Star size={20}/>)} 
           <span style={{fontSize:"20px"}}>({props.rating})</span>  
    </> );
}
 
export default AppRatings;