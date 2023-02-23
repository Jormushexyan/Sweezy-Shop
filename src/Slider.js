import React, { useState } from 'react'
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from "react-icons/md";

export default function Slider() {
    const [current, setCurrent] = useState(0);
    return (
        <div>
            <div className="slider-container">
                <MdOutlineArrowBackIosNew className='button' onClick={() => {
                    current < 100 ? setCurrent(400) : setCurrent(current - 25)
                }} />
                <MdOutlineArrowForwardIos className='button' onClick={() => {
                    current > 300 ? setCurrent(0) : setCurrent(current + 25)
                }} />
                <div className="slide" style={{ left: `-${current}%` }}>
                    <div className="picture-list">
                        <div className="picture"></div>
                        <div className="picture"></div>
                        <div className="picture"></div>
                        <div className="picture"></div>
                        <div className="picture"></div>
                    </div>
                    <div className="picture-list">
                        <div className="picture"></div>
                        <div className="picture"></div>
                        <div className="picture"></div>
                        <div className="picture"></div>
                        <div className="picture"></div>
                    </div>
                    <div className="picture-list">
                        <div className="picture"></div>
                        <div className="picture"></div>
                        <div className="picture"></div>
                        <div className="picture"></div>
                        <div className="picture"></div>
                    </div>
                    <div className="picture-list">
                        <div className="picture"></div>
                        <div className="picture"></div>
                        <div className="picture"></div>
                        <div className="picture"></div>
                        <div className="picture"></div>
                    </div>
                    <div className="picture-list">
                        <div className="picture"></div>
                        <div className="picture"></div>
                        <div className="picture"></div>
                        <div className="picture"></div>
                        <div className="picture"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
