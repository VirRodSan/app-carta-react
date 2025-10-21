import "./Product.css"

export default function Product({nameCategoria,name,price}){
 
    return(
        <div className="product">
            
            <span className="name">{name}</span>
            <span className="price">{price}€</span>
        </div>
    )
}