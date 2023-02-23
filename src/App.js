import { useEffect, useRef, useState } from 'react';
import './App.css';
import Cart from './components/Cart';
import Categories from './components/Categories';
import Header from './components/Header';
import Headermain from './components/Headermain';
import Payments from './components/Payments';
import Slider from './Slider';
import { Context } from './Context';
import { BsArrowUpSquareFill } from 'react-icons/bs';
import { Routes, Route } from 'react-router-dom';
import Bproducts from './pages/Bproducts';
import Nproducts from './pages/Nproducts';
import Sales from './pages/Sales';
import Dillers from './pages/Dillers';
import Bsellers from './pages/Bsellers';
function App() {
  const [carts, setCarts] = useState([]);
  const [openCart, setOpenCart] = useState(false);
  const [total, setTotal] = useState(0);
  const [count, setCount] = useState(1);
  const [money, setMoney] = useState(0);
  const [openPay, setOpenPay] = useState(false)
  const [cash, setCash] = useState(Math.round(Math.random() * 50000))

  const cartAdd = prop => {
    if (carts.includes(prop)) {
      return false
    }
    else {
      setCarts([...carts, prop]);
    }
  }

  const cartRemove = id => {
    setCarts([...carts.filter(item => item.id !== id)]);
  }

  const headerRef = useRef();
  window.onmousewheel = e => {
    headerRef.current.style.top = e.deltaY === 100 ? '-500px' : 0
  }

  let properties = {
    carts, setCarts,
    cartAdd, cartRemove,
    openCart, setOpenCart,
    total, setTotal,
    setCount, setMoney,
    headerRef, openPay, setOpenPay,
    cash, setCash
  }

  let up;
  useEffect(() => {
    up = document.querySelector('.up');
  })

  window.addEventListener('scroll', () => {
    up.style.opacity = window.scrollY > 900 ? 1 : 0
  })

  return (
    <Context.Provider value={properties}>
      <div className="App">
        <Header />
        <Headermain />
        <Slider />
        <Categories />
        <Cart />
        <Payments />
        <a href="#header" className='up'><BsArrowUpSquareFill /></a>
        <Routes>
          <Route path='/bestproducts' element={<Bproducts />}></Route>
          <Route path='/new' element={<Nproducts />}></Route>
          <Route path='/sales' element={<Sales />}></Route>
          <Route path='/dillers' element={<Dillers />}></Route>
          <Route path='/bestsellers' element={<Bsellers />}></Route>
        </Routes>
      </div>
    </Context.Provider>
  );
}

export default App;
