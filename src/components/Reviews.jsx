const AppReviews = () => {
    const imageStyle = {
        width:"50px",
        height : "50px",
        borderRadius : "50%",
        border : "2px solid",
        margin : "5px 10px",
        
    
    }
    return ( <>
       <div className="d-flex">
         <div>
         <img style={imageStyle} src="https://cdn-icons-png.flaticon.com/512/3106/3106773.png"/>
         </div>
         <div>
            <h4 className="d-inline">Ananta Shinde</h4>
            <p>This product is very good.</p>
         </div>
       </div>
        
       
    </>  );
}
 
export default AppReviews;