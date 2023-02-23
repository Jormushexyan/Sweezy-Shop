import { useState, useRef, useEffect, useContext, memo } from 'react';
import { Context } from '../Context';
import { menu } from '../menu';
import { IoIosArrowBack } from "react-icons/io";
import { ImZoomIn } from 'react-icons/im';

export default memo(function Categories() {
    const [category, setCategory] = useState(menu);
    const $ = useContext(Context);
    const [image, setImage] = useState('');
    const [openImage, setOpenImage] = useState(false);
    const loaderRef = useRef();
    const filterCategories = item => {
        const effect = menu.filter(current => {
            return current.category === item
        })
        setCategory(effect);
    }

    const [zoomImg, setZoomImg] = useState([])
    const [zoomOpen, setZoomOpen] = useState(false)

    useEffect(() => {
        loaderRef.current.style.display = 'flex';
        setTimeout(() => {
            loaderRef.current.style.display = 'none';
        }, 2500);
    }, [category])

    const imagestyles = {
        clipPath : openImage ? 'circle(140.1% at 50% 50%)' : 'circle(0.0% at 50% 50%)',
        background: `url(${image}), rgba(0,0,0,0.8)`,
    }

    return (
        <div className='categories'>
            <div className='show-image' onClick={() => {
                setOpenImage(false);
                document.body.style.overflow = 'visible';
                document.body.style.cursor = 'default';
                setImage('');
            }} style={imagestyles}></div>
            <div className="zoom-image" style={{ clipPath: zoomOpen ? "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" : "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}>
                <IoIosArrowBack onClick={() => {
                    setZoomOpen(false)
                }} />
                {zoomImg.map((zoom) => {
                    return <div className='zoom-item'>
                        <img src={zoom.picture} alt="" />
                        <div className='zoom-info'>
                            <h4>More Information</h4>
                            <h2>{zoom.name}</h2>
                            <h5>{zoom.made}</h5>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe alias voluptatibus veniam. Cupiditate illum aliquid esse omnis debitis minus et! Asperiores quis blanditiis nisi ex vel illo consectetur possimus eveniet earum est mollitia libero debitis quas non rerum minus cupiditate excepturi hic, vero dolorem iste iusto. Facere animi suscipit quisquam vero, quidem exercitationem, corrupti expedita natus quo doloribus at consectetur aperiam est praesentium. Repudiandae eius aperiam eos ducimus soluta quaerat sapiente laborum aliquid, voluptatibus eum voluptas, vitae, dolores maiores illo facilis non tenetur. Similique dolores voluptatibus illum ullam. At ad voluptatem harum molestias optio earum. Deleniti quis totam perspiciatis suscipit?</p>
                            <span>{zoom.price}$</span>

                            <div className="stars">
                                <div className="star"></div>
                                <div className="star"></div>
                                <div className="star" style={{ background: zoom.price < 20 ? 'gray' : 'orangered' }}></div>
                                <div className="star" style={{ background: zoom.price < 50 ? 'gray' : 'orangered' }}></div>
                                <div className="star" style={{ background: zoom.price < 100 ? 'gray' : 'orangered' }}></div>
                            </div>

                            <div className="price-buttons">
                                <button onClick={() => {
                                    if ($.carts.includes(zoom)) {
                                        return false
                                    }
                                    else {
                                        $.cartAdd(zoom)
                                        $.setTotal($.total + zoom.price);
                                        setZoomOpen(false)
                                    }
                                }}>Add to Cart</button>
                                <button onClick={() => {
                                    $.setOpenPay(true)
                                }}>Buy now</button>
                            </div>

                        </div>
                    </div>
                })}
            </div>
            <h2>Shop Categories</h2>
            <div className="container">
                <div className="tab-menu">
                    <button onClick={() => setCategory(menu)}>All</button>
                    <button onClick={() => filterCategories('Shoes')}>Shoes</button>
                    <button onClick={() => filterCategories('Cap')}>Cap</button>
                    <button onClick={() => filterCategories('Shirt')}>Shirt</button>
                    <button onClick={() => filterCategories('Jewelry')}>Jewelry</button>
                    <button onClick={() => filterCategories('Bags')}>Bags</button>
                    <button onClick={() => filterCategories('Glasses')}>Glasses</button>
                    <button onClick={() => filterCategories('Electronics')}>Electronics</button>
                    <button onClick={() => filterCategories('Watches')}>Watches</button>
                    <button onClick={() => filterCategories('Beauty')}>Beauty & Health</button>
                    <button onClick={() => filterCategories('Toys')}>Toys</button>
                </div>
                <div className="content">
                    <div className="loader" ref={loaderRef}>
                        <img src="https://deltassis.com.br/assets/img/loading_icon.gif" alt="" />
                    </div>
                    {category.map(item => {
                        return <div className='item' key={item.id}>
                            <div className='added'>
                                <img src="https://media0.giphy.com/media/MCM9C4jJu0vi3iVf0R/giphy.gif?cid=6c09b9520mgtx0vxdwk1pc0uqb0x2yphfe2048prafqqs5a9&rid=giphy.gif&ct=s" alt="" />
                            </div>
                            <img src={item.picture} alt=""
                                onClick={() => {
                                    setZoomImg([item])
                                    setZoomOpen(true)
                                }}
                                onContextMenu={(e) => {
                                    e.preventDefault()
                                }}
                            />

                            <button className='zoom-in' onClick={() => {
                                setOpenImage(true);
                                setImage(item.picture);
                                document.body.style.overflow = 'hidden';
                                document.body.style.cursor = 'zoom-out';
                            }}><ImZoomIn /></button>
                            <h2>{item.name}</h2>
                            <h4>{item.made}</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, natus. Optio eum suscipit repudiandae illo ex, facilis harum veniam, autem ad, ipsam sit aut tenetur et quis repellat expedita eligendi!</p>
                            <h3>{item.brand}</h3>
                            <span className='price'>{item.price + 248}$</span>
                            <div className="star-cont">
                                <span>{item.price}$</span>
                                <div className="stars">
                                    <div className="star"></div>
                                    <div className="star"></div>
                                    <div className="star" style={{ background: item.price < 20 ? 'gray' : 'orangered' }}></div>
                                    <div className="star" style={{ background: item.price < 50 ? 'gray' : 'orangered' }}></div>
                                    <div className="star" style={{ background: item.price < 100 ? 'gray' : 'orangered' }}></div>
                                </div>
                            </div>
                            <button onClick={(e) => {
                                $.cartAdd(item);
                                if ($.carts.includes(item)) {
                                    e.target.parentElement.classList.add('shake');
                                    setTimeout(() => {
                                        e.target.parentElement.classList.remove('shake');
                                    }, 500);
                                }
                                else {
                                    e.target.parentElement.children[0].classList.add('adding');
                                    setTimeout(() => {
                                        e.target.parentElement.children[0].classList.remove('adding');
                                    }, 1500)
                                    $.setTotal($.total + item.price);
                                }
                            }}>Add To Cart</button>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}
)