import { useContext } from "react"
import { Context } from "../Context"
import { MdClose } from 'react-icons/md';
import { FaTrash } from 'react-icons/fa';
import { memo } from "react";
export default memo(function Cart() {
    const $ = useContext(Context);
    return (
        <div className="cart-container" style={{ display: $.openCart ? 'flex' : 'none' }}>
            <button className="close" onClick={() => $.setOpenCart(false)}>
                <MdClose />
            </button>
            <div className="cart">
                {$.carts.map(cart => {
                    return <div key={cart.id} className='cart-item'>
                        <img src={cart.picture} alt="" />
                        <div className="names">
                            <h2>{cart.name}</h2>
                            <h5>{cart.made}</h5>
                            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate dignissimos temporibus itaque provident dolores odit laborum maxime illum ad quibusdam!</h6>
                        </div>
                        <div className="prices">
                            <button>SALE</button>
                            <h5>{cart.price + 248}$</h5>
                            <h2>{cart.price}$</h2>
                        </div>
                        <div className="countes">
                            <button onClick={() => {
                                if (cart.isQuan <= 1) {
                                    $.setCount(cart.isQuan = 1)
                                }
                                else {
                                    $.setCount(cart.isQuan -= 1);
                                    $.setMoney(cart.data = cart.isQuan * cart.price)
                                    $.setTotal($.total - cart.price);
                                }
                            }}>{cart.data === cart.price ? <FaTrash onClick={() => {
                                $.cartRemove(cart.id);
                                $.setTotal($.total - cart.price);
                            }} /> : '-'}</button>
                            <span>{cart.isQuan}</span>
                            <button onClick={() => {
                                $.setCount(cart.isQuan += 1);
                                $.setMoney(cart.data = cart.isQuan * cart.price);
                                $.setTotal($.total + cart.price);
                            }}>+</button>
                        </div>
                        <span>{cart.data}$</span>
                    </div>

                })}
            </div>
            <div className="cart-total">
                <h2>Cart count is ({$.carts.length})p.</h2>
                <h3>Grand total : {$.total}$</h3>
                <button onClick={() => $.setOpenPay(true)}>Pay with card</button>
            </div>
        </div>
    )
}
)