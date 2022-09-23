import cart from './assets/cart.svg'

const CartWidget = () => {
    return (
        <div>
            <img src={cart} alt='cart' style={{
                     height: 100,
                     width: 100,
            }
            }   />
            10
        </div> 
    )
}
export default CartWidget