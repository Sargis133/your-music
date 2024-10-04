import Loader from "./Loader";
import {useEffect, useRef, useState} from "react";

function Payment({emptyField}) {

    const [isShowLoader, setIsShowLoader] = useState(false);
    const inputs = useRef([])


    useEffect(() => {
        if(emptyField) {
            Object.values(inputs.current).forEach(item => {
                if(item) {
                    item.value = ''
                    item.classList.remove('error-input')
                }
            })
        }
    }, [emptyField]);


    function onSubmitPayment() {
        let isEmpty = false

        inputs.current.forEach(item => {
            if(!item.value) {
                item.classList.add('error-input')
                isEmpty = true
            } else {
                item.classList.remove('error-input')
            }
        })

        if(!isEmpty) {
            setIsShowLoader(true)

            setTimeout(() => {
                setIsShowLoader(false)
                window.location.href = '/'
            }, 3000)
        }
    }


    return(
        <div className="payment-form">
            <Loader isShow={isShowLoader}/>

            <div className="payment-form__inputs-block">
                <input ref={el => inputs.current[0] = el} type="text" className="form-input" placeholder="Name" />
                <input ref={el => inputs.current[1] = el} type="text" className="form-input" placeholder="Surname" />
                <input ref={el => inputs.current[2] = el} type="text" className="form-input" placeholder="Email" />
                <input ref={el => inputs.current[3] = el} type="text" className="form-input" placeholder="Card Number" />
                <input ref={el => inputs.current[4] = el} type="text" className="form-input" placeholder="Date **/**"/>
                <input ref={el => inputs.current[5] = el} type="text" className="form-input" placeholder="CVV ***" />
            </div>
            <div className="payment-form__buy-btn">
                <button className="ticket-button" onClick={onSubmitPayment}>Confirm</button>
            </div>
        </div>
    )
}

export default Payment