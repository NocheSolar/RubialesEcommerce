import {useState,useContext } from 'react';
import { collection, addDoc} from "firebase/firestore";
import { Link } from 'react-router-dom';
import db from '../../Services/Firebase';
import { CartContext } from '../Context/CartContextProvider';


const Checkout = () => {

    const {cartList,totalPrice,emptyCart}= useContext(CartContext)

    const [load, setLoad] = useState(false)
    const [orderID, setOrderID] = useState()
    
    const [buyer, setBuyer] = useState({
        Nombre:'',
        Email:'',
        Telefono:''
    })

    const {Nombre, Email, Telefono} = buyer

    const handleInputChange = (inf) => {
        setBuyer(({
            ...buyer,
            [inf.target.name]:inf.target.value
        }))
    }

    const generateOrder = async(data) => {
        setLoad(true)
        try {
            const col = collection(db,"Orders")
            const order = await addDoc(col,data) 
            setOrderID(order.id)
            emptyCart()
            setLoad(false)
        } catch (error) {
            console.log(error)
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const dia = new Date()
        const items = cartList.map(item=> {return {id:item.id,title:item.tittle,price:item.price,stock:item.stock}})        
        const total = totalPrice()
        const data = {buyer,items,dia,total}
        console.log("data",data)  
        generateOrder(data)
        
        
    }
    

    return (
        <>
            <h1>Finalizando Compra</h1>
            
                <div>
                    <h4>Completar Datos:</h4>
                    <br />
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="Nombre"
                            placeholder="Nombre"
                            value={Nombre}
                            onChange={handleInputChange}
                            required
                        />
                        <br />
                        <input
                            type="email"
                            name="Email"
                            placeholder="Email"
                            value={Email}
                            onChange={handleInputChange}
                            required
                        />
                        <br />
                        <input
                            type="number"
                            name="Telefono"
                            placeholder="Telefono"
                            value={Telefono}
                            onChange={handleInputChange}
                            required
                        />
                        <br /><br />
                        <input
                            type="submit"
                            value="Finalizar Compra"
                
                        />
                    </form>
                </div>

            <div>
            {
                orderID&&(
                    <div>
                        <h4>Compra Finalizada con Exito</h4>
                        <h4>{`Su código de compra es: ${orderID}`}</h4>
                        <Link to="/"><h5>Realizar otra compra</h5></Link>
                    </div>
                    )
            }
            </div>

        </>
    )
}

export default Checkout