import { useDispatch, useSelector } from 'react-redux';
import {removeFromCart} from '../../Store/cartSlice'

function Cart(){
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cartReducer.cart)
    console.log(cart)
    function removeCart(index) {
        dispatch(removeFromCart(index))


    }
    return <div>
        {cart.map((item,index) => {
                return <div>
                    <h3>
                        <img src={item.image}  width="70" height="70" /> {item.title} - Rs. {item.price}
                        <button className='bg-primary' onClick={() => removeCart(index)} style={{ marginLeft: 30 }} variant="outline-danger">Remove</button>
                    </h3>
                </div>
            })}
           
    </div>
}
export default Cart;