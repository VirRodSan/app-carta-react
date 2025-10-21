1.- Introducción
La actividad pedida nos permite adentrarnos en React, biblioteca JavaScript de código abierto que permite crear interfaces de usuario dinámicas y escalables. Este será el primer paso antes de adentrarnos en React Native para la creación de aplicaciones móviles.
Se nos presenta la imagen de una carta de un restaurante, que debemos replicar siguiendo la filosofía React de creación de componentes.
En el presente documento, se mostrará el esquema de la aplicación realizada, así como la programación de cada uno de los archivos creados en JavaScript. Cada archivo corresponde con un componente de React.
2.- Estructura de la aplicación
El punto de entrada de la aplicación React estará en el archivo main.jsx. A partir de este, llamaremos al archivo App.jsx ubicado en la carpeta App. El esquema de componentes sería:
3.- Componentes
3.1 App
En el almacenamos el json con los productos que vamos a inyectar a través de toda la estructura hasta Product.jsx
import './App.css'
import Contenedor from "./Contenedor/Contenedor"
export default function App() {
  const categorias = {
    "menu":[
     {"idCategoria":1,
      "nameCategoria":"Coffee",
      "products": [
        { "idProduct":1,"name": "French Vanilla", "price": 3.00 }, 
        { "idProduct":2,"name": "Caramel Macchiato", "price": 3.75 },
        { "idProduct":3,"name": "Pumpkin Spice", "price": 3.50 },
        { "idProduct":4,"name": "Hazelnut", "price": 4.00 },
        { "idProduct":5,"name": "Mocha", "price": 4.50 }]},
      {"idCategoria":2,
      "nameCategoria": "Desserts",
      "products": [
        { "idProduct":6,"name": "Donut", "price": 1.50 },
        { "idProduct":7,"name": "Cherry Pie", "price": 2.75 },
        { "idProduct":8,"name": "Cheesecake", "price": 3.00 },
        { "idProduct":9,"name": "Cinnamon Roll", "price": 2.50 } ] } ] }
  return (
    <div className='fondo'>
      <section className='contenedor'>
        <Contenedor categorias={categorias}/>
      </section>
   </div>
  )}

3.2 Contenedor
En este componente organizamos la estructura interna, llamando a los diferentes componentes que conformarán la página
import Header from "./Header/Header"
import Spacer from "./Spacer/Spacer"
import Products from "./Products/Products"
import Footer from "./Footer/Footer"

export default function Contenedor({categorias}){
    return(
        <>
            <Header/>
            <Spacer/>
            <Products categorias ={categorias}/>
            <Spacer/>
            <Footer/>
        </>
    )}

3.3 Products
Este es uno de los componentes más importantes. En el extraemos el objeto json categorias y lo convertimos en un array. Este array es mapeado de dos veces, en una extraeremos el nombre de la categoria y en la siguiente vuelta, los productos que inyectaremos en el componente Product.
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
    )}

3.4 Product
Mínima expresión. En este componente únicamente tenemos el nombre y el precio de cada producto. Los valores son inyectados desde la función padre.
import "./Product.css"

export default function Product({nameCategoria,name,price}){
 
    return(
        <div className="product">
            <span className="name">{name}</span>
            <span className="price">{price}€</span>
        </div>
    )}

4.- Referencias
Meta Platforms, Inc. (s.f.). React – Una biblioteca de JavaScript para construir interfaces de usuario. React. Recuperado 22 de enero de 2024 de https://react.dev/
Minudev. (s.f.). Aprender React. Minudev. Recuperado 22 de enero de 2024 de https://aprenderreact.dev/
