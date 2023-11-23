import AppProductCard from "./AppProductCard";

const ProductSection = () => {
    return ( <section className="product-section" style={{padding:"2% 5%"}}>
        <h4>Friday Sale</h4>
        <div className="products-list-container">
            <AppProductCard/>
            <AppProductCard/>
            <AppProductCard/>
            <AppProductCard/>
        </div>
    
    
</section> );
}
 
export default ProductSection;