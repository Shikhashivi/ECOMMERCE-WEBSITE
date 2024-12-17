import React, { useContext } from 'react';
import { CartContext } from '../Components/Features/ContextProvider';
import CartProduct from '../Components/CartProduct';


const Cart = ({  }) => {
  const { cart } = useContext(CartContext);

  return (
    <div className="container">
      <div className="row">
        <div className="col-8">
          <div className='d-flex border'>
            {cart.map((product, index) => (
              <CartProduct key={index} product={product} />
            ))}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
