import AppProductCard from "./AppProductCard";

const ProductSection = (props) => { 

    return ( <section className="product-section" style={{padding:"2% 5%"}}>
        <h4>{props.title}</h4>
        <div className="products-list-container">
            {/* <AppProductCard product = {products[0]}/>
            <AppProductCard product = {products[1]}/> */}
            {/* iterate through products array to create multiple products cards */}
            {
                props.products.map(p=><AppProductCard product={p}/>)
            }
        </div>
    
    
</section> );
}
 
export default ProductSection;