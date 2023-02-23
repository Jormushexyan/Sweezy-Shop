import { memo, useContext, useRef, useState } from "react"
import { AutoTabProvider } from "react-auto-tab"
import { Context } from "../Context"


export default memo(function Payments() {
    let validname = /^[A-Z]+$/
    let validnumber = /^\d{4}-\d{4}-\d{4}-\d{4}$/
    let validdate = /^\d{2}\/\d{2}/
    let validCvv = /^\d{3}$/
    let validRegion = /^\+\d{3}$/
    let validTwonumber = /^\d{2}$/
    let cvvRef = useRef()
    let nameRef = useRef()
    let surnameRef = useRef()
    let numberRef = useRef()
    let dateRef = useRef()
    let phoneRef = useRef()
    let resultRef = useRef()

    const [valid, setValid] = useState({
        name: '', surname: '', number: '', date: '', cvv: '', region: '', code: '', num1: '', num2: '', num3: ''
    })
    const $ = useContext(Context)
    const changevalues = (field, e) => {
        setValid({ ...valid, [field]: e.target.value })
    }
    const validfields = () => {
        console.log($.cash)
        nameRef.current.style.opacity = valid.name.match(validname) ? 0 : 1;
        numberRef.current.style.opacity = valid.number.match(validnumber) ? 0 : 1;
        surnameRef.current.style.opacity = valid.surname.match(validname) ? 0 : 1;
        dateRef.current.style.opacity = valid.date.match(validdate) ? 0 : 1;
        cvvRef.current.style.opacity = valid.cvv.match(validCvv) ? 0 : 1;
        phoneRef.current.style.opacity = valid.region.match(validRegion)
            && valid.code.match(validTwonumber) && valid.num1.match(validTwonumber)
            && valid.num2.match(validTwonumber) && valid.num3.match(validTwonumber)
            ? 0 : 1;
        if (valid.name.match(validname) && valid.surname.match(validname) &&
            valid.number.match(validnumber) && valid.date.match(validdate) &&
            valid.cvv.match(validCvv) && valid.region.match(validRegion) &&
            valid.code.match(validTwonumber) && valid.num1.match(validTwonumber)
            && valid.num2.match(validTwonumber) && valid.num3.match(validTwonumber)) {
            if ($.cash > $.total) {
                resultRef.current.style = 'opacity: 1; color: green';
                resultRef.current.innerText = 'Your payement is succesfull';
                setValid({
                    name: '', surname: '', number: '', date: '', cvv: '', region: '', code: '', num1: '', num2: '', num3: ''
                })
                $.setCarts([]);
                $.setTotal(0);
                $.carts.map(cart => {
                    $.setCount(cart.isQuan = 1)
                    $.setMoney(cart.data = cart.price)
                })
            }
            else {
                resultRef.current.style = 'opacity: 1; color: red';
                resultRef.current.innerText = 'Not enough money';
            }
        }
        else {
            resultRef.current.style = 'opacity: 1; color: red';
            resultRef.current.innerText = 'The fields is not correct';
        }
    }

    const numberchange = (e) => {
        if (valid.number.length == 3 || valid.number.length == 8 || valid.number.length == 13) {
            setValid({ ...valid, number: e.target.value.toString().concat('-') })
        }
        else {
            setValid({ ...valid, number: e.target.value })
        }
    }
    const numberkeychange = (e) => {
        if (e.key == 'Backspace') {
            if (valid.number.length == 3 || valid.number.length == 8 || valid.number.length == 13) {
                e.preventDefault();
                setValid({ ...valid, number: e.target.value.toString().slice(0, -1) })

            }
        }


    }

    return (
        <div className="form-container" style={{ display: $.openPay ? "flex" : "none" }} onClick={(event) => {
            if (event.target.className === "form-container") {
                $.setOpenPay(false)
            }
        }}>
            <form>
                <h2>Pay with Master/Visa Cards</h2>
                <img src="https://icon-library.com/images/visa-master-icon/visa-master-icon-9.jpg" alt="" />

                <AutoTabProvider>
                    <div className="form-name">
                        <label htmlFor="" >
                            <div className="invalid" ref={nameRef}> !
                            </div>
                            <input tabbable="false" type="text" placeholder="Name" value={valid.name} onChange={(e) => {
                                changevalues('name', e)
                            }} />
                        </label>

                        <label htmlFor="">
                            <div className="invalid" ref={surnameRef}> !
                            </div>
                            <input tabbable="false" type="text" placeholder="Surname" value={valid.surname}
                                onChange={(e) => {
                                    changevalues('surname', e)
                                }} />
                        </label>

                    </div>

                    <label >
                        <div className="invalid" ref={numberRef}> !
                        </div>
                        <input tabbable="false" maxLength={19} type="text" placeholder="XXXX-XXXX-XXXX-XXXX" value={valid.number} onChange={(e) => {
                            numberchange(e)
                        }} onKeyDown={(e) => {
                            numberkeychange(e)
                        }} />
                    </label>

                    <label htmlFor="">
                        <div className="invalid" ref={dateRef}> !
                        </div>
                        <input tabbable="false" maxLength={5} type="text" placeholder="02/12" value={valid.date}
                            onChange={(e) => {
                                changevalues('date', e)
                            }} />
                    </label>

                    <label htmlFor="">
                        <div className="invalid" ref={cvvRef}> !
                        </div>
                        <input tabbable="false" maxLength={3} type="text" placeholder="123" value={valid.cvv} onChange={(e) => {
                            changevalues('cvv', e)
                        }} />
                    </label>

                    <div className="phone">
                        <label htmlFor="">
                            <div className="invalid" ref={phoneRef}> !
                            </div>
                            <input tabbable="false" maxLength={4} type="text" placeholder="+374" value={valid.region} onChange={(e) => {
                                changevalues('region', e)
                            }} />
                            <input tabbable="false" maxLength={2} type="text" placeholder="91" value={valid.code} onChange={(e) => {
                                changevalues('code', e)
                            }} />
                            <input tabbable="false" maxLength={2} type="text" placeholder="xx" value={valid.num1} onChange={(e) => {
                                changevalues('num1', e)
                            }} />
                            <input tabbable="false" maxLength={2} type="text" placeholder="xx" value={valid.num2} onChange={(e) => {
                                changevalues('num2', e)
                            }} />
                            <input tabbable="false" maxLength={2} type="text" placeholder="xx" value={valid.num3} onChange={(e) => {
                                changevalues('num3', e)
                            }} />
                        </label>
                    </div>
                </AutoTabProvider>

                <button onClick={(e) => {
                    e.preventDefault()
                    validfields()
                }}>Pay</button>
                <p ref={resultRef}></p>
            </form>
        </div>
    )
}


)