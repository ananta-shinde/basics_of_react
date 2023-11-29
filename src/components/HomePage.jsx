import AppCarousel from "./AppCarousel";
import Navbar from "./Navbar";
import ProductSection from "./ProductSection";

const HomePage = () => {

    const sections = [
                        {
                            title : "FLAT 50% OFF",
                            products : [
                                            {
                                                id : 0,
                                                image : "https://media.istockphoto.com/id/1350560575/photo/pair-of-blue-running-sneakers-on-white-background-isolated.webp?b=1&s=170667a&w=0&k=20&c=liUSgX6SafJ7HWvefFqR9-pnf3KuH6v1lwQ6iEpePWc=",
                                                name : "Sport shoe (Blue)",
                                                price : 6500
                                            },
                                            {
                                                id:1,
                                                image : "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D",
                                                name : "Sport shoe (Red)",
                                                price : 5500
                                            },
                                        ]
        
                        },
                        {
                                title : "New Arrivals",
                                products :[
                                            {
                                                id : 3,
                                                image : "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                                                name : "Sport shoe (White)",
                                                price : 6500
                                            },
                                            {
                                                id:4,
                                                image : "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                                                name : "Sport shoe (Green)",
                                                price : 5500
                                            }]
                        },
                        {
                                    title : "Causal Shoes",
                                    products :[
                                            {
                                                id : 7,
                                                image : "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                                                name : "Sport shoe (White)",
                                                price : 6500
                                            },
                                            {
                                                id:8,
                                                image : "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                                                name : "Sport shoe (Green)",
                                                price : 5500
                                            },
                                        ]
                        },
                        {
                            title : "Sneakers",
                            products :[
                                    {
                                        id : 7,
                                        image : "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                                        name : "Sport shoe (White)",
                                        price : 6500
                                    },
                                    {
                                        id:8,
                                        image : "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                                        name : "Sport shoe (Green)",
                                        price : 5500
                                    },
                                ]
                }
                    ];
        
        
    return ( <>
        <Navbar/>
        <AppCarousel/>
        {/* <ProductSection products={sections[0].products} title = {sections[0].title}/>
        <ProductSection products={sections[1].products} title = {sections[1].title}/>
        <ProductSection products={sections[2].products} title = {sections[2].title}/> */}
        {
            sections.map(s=><ProductSection products={s.products} title={s.title}/> )
        }
        
        </> );
}
 
export default HomePage;