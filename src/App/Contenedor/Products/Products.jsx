import Product from "./Product/Product"
import './Products.css'

export default function Products({categorias}){

    const arrayCategoria = Object.entries(categorias.menu)
    

    return(
        <>
         {categorias.menu.map(categoria=>(
            <section key={categoria.idCategoria} className="categoria">
                <h2 className="categoria-titulo">{categoria.nameCategoria}</h2>
            {categoria.products.map(product =>(
                <Product className="productos-lista"
                    key={product.idProduct}
                    nameCategoria={categoria.nameCategoria}
                    name={product.name}
                    price={product.price}
                />
            ))}
            </section>
         ))}
        </>
    )

}