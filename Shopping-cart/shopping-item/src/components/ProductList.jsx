import ProductCard from "./ProductCard"

const product =[
    {id:1,name:"laptop",price:800},
    {id:2,name:"tv",price:4000},
    {id:3,name:"Phone",price:80000},
    {id:4,name:"Headphones",price:8000},
    {id:5,name:"Mouse",price:800}
]

export default function ProductList(){
    return(
        <div className="row">
            {product.map((p)=>(
                <div key={p.id} className="col-md-3 mb-4">
                    <ProductCard  product={p}/>
                
                </div>
            ))}
        </div>
    )
}