import { IoIosArrowDown } from 'react-icons/io';
import { GiShoppingBag } from 'react-icons/gi';
import { useContext, useState, memo } from 'react';
import { Context } from '../Context';
import { NavLink } from 'react-router-dom';
export default memo(function Header() {
    const $ = useContext(Context);
    const [openDay, setOpenDay] = useState(false);
    return (
        <header ref={$.headerRef}>
            <h1>Sweezy Shop</h1>
            <ul className='menu'>
                <li><a href="#">Today's offer</a></li>
                <li><a href="#">V-Day</a><IoIosArrowDown onClick={() => {
                    setOpenDay(!openDay)
                }} />
                    <div className="v-day-dropdown" style={{ display: openDay ? 'flex' : 'none' }}>
                        <NavLink to="/bestproducts">Best Products</NavLink>
                        <NavLink to="/new">New Products</NavLink>
                        <NavLink to="/sales">Sales</NavLink>
                        <NavLink to="/dillers">Dillers</NavLink>
                        <NavLink to="/bestsellers">Best Sellers</NavLink>
                    </div>
                </li>
                <li><a href="#">Panties</a><IoIosArrowDown /></li>
                <li><a href="#">Lingerie</a><IoIosArrowDown /></li>
                <li><a href="#">Sales & Offers</a><IoIosArrowDown /></li>
                <li><a href="#">Beauty</a><IoIosArrowDown /></li>
                <li><a href="#">Accessories</a><IoIosArrowDown /></li>
                <li><a href="#">Sale</a></li>
            </ul>
            <div className="cart-icon">
                <GiShoppingBag onClick={() => $.setOpenCart(!$.openCart)} />
                <span>Cart ({$.carts.length})</span>
            </div>

        </header>
    )
})