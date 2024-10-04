import {useRef, useState} from "react";
import Modal from "./Modal";

function Subscribe() {
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState(false)
    const [isShowModal, setIsShowModal] = useState(false)
    const emailInput = useRef(false)

    function sendEmailSubscribe() {
        if(!email) {
            setEmailError(true)
        } else {
            setIsShowModal(true)
            setTimeout(() => {
                setIsShowModal(false)
                emailInput.current.value = ''
            }, 3000)
        }
    }

    return(
        <div className="subscribe-content wrapper" >
            <Modal isShow={isShowModal} modalData={{title: 'Success', text: 'Application sent'}}/>
            <div className="subscribe-content__title">
                <p>Subscribe & Follow</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi condimentum, neque ac porttitor scelerisque.</p>
            </div>
            <div className="subscribe-content__form">
                <input onChange={(e) => setEmail(e.target.value)}
                       onKeyDown={(e) => e.key === 'Enter' ? sendEmailSubscribe() : ''}
                       type="text"
                       className={`form-input ${emailError ? 'error-input' : ''}`}
                       placeholder="Your E-mail"
                       ref={emailInput}
                />
                <button className="ticket-button" onClick={sendEmailSubscribe}>Subscribe</button>
            </div>
        </div>
    )
}

export default Subscribe;