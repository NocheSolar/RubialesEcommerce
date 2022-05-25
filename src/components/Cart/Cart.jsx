import { useCartContext } from "../Context/CartContextProvider";
import CartItem from "../CartItem/CartItem";
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartList, emptyCart, totalPrice } = useCartContext();

  return (
    <div>
      {cartList.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      {cartList.length > 0 ? (
        <>
          <button onClick={() => emptyCart()}>Vaciar Carrito</button>
          <h1>Precio total: ${totalPrice()}</h1>
        </>
      ) : (
        <h1>No hay items en el carrito</h1>
      )}

      <Link to='/checkout'>
        <button className="btn btn-info">Finalizar Compra</button>
      </Link>
    </div>
  );
};

export default Cart;