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
    )
}