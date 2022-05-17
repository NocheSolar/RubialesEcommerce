import { useCartContext } from "../../Context/CartContextProvider";
import CartItem from "../CartItem/CartItem";

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
    </div>
  );
};

export default Cart;