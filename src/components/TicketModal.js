import Icons from "./Icons";
import {useEffect, useRef, useState} from "react";
import Payment from "./Payment";
import React from "react";


function TicketModal({ticketData, isShow, closeModal, emptyField}) {
    const [count, setCount] = useState('')
    const [place, setPlace] = useState('')
    const paymentBlock = useRef(null)
    const modalBody = useRef(null)
    const inputs = useRef([])


    useEffect(() => {
        if(emptyField) {
            Object.values(inputs.current).forEach(item => {
                if(item) {
                    item.value = ''
                    if(item.classList.contains('error-input')) {
                        item.classList.remove('error-input')
                    }
                }
            })
            if(!paymentBlock.current.classList.contains('ticket-modal__payment__hidden')) {
                paymentBlock.current.classList.add('ticket-modal__payment__hidden')
            }
        }
    }, [emptyField]);


    function onCheckValidation() {
        let isEmpty = false

        inputs.current?.forEach(item => {
            if(item) {
                if(!item.value) {
                    item.classList.add('error-input')
                    isEmpty = true
                } else {
                    item.classList.remove('error-input')
                }
            }

        })

        return isEmpty
    }


    function onBuyTicket() {
        if(!onCheckValidation()) {
            paymentBlock.current.classList.remove('ticket-modal__payment__hidden')
            modalBody.current.scrollTo({
                left: 0,
                top: paymentBlock.current.scrollTop + 400,
                behavior:"smooth"
            })
        } else {
            paymentBlock.current.classList.add('ticket-modal__payment__hidden')
        }
    }


    return(

        <div className={`ticket-modal ${!isShow ? 'hidden-modal' : ''}`} >

            <div className="ticket-modal__body" ref={modalBody}>
                <div className="ticket-modal__close-btn">
                    <button onClick={closeModal}>
                        <Icons name="close" width="25" height="25"/>
                    </button>
                </div>
                <div className="ticket-modal__item">
                    <div className="ticket-modal__top">
                        <img className="ticket-modal__image" src={ticketData.cover} alt=""/>
                        <div className="ticket-modal__title">
                            <p className="ticket-modal__name">{ticketData.name}</p>
                            <p className="ticket-modal__category">{ticketData.category}</p>
                            <p className="ticket-modal__date">{ticketData.date}</p>
                            <p className="ticket-modal__description">{ticketData.description}</p>
                        </div>
                    </div>
                    <div className="ticket-modal__buy-section">
                        {
                            ticketData.entry ? (
                                <>
                                    <div className="buy-section__input-block">
                                        <p>Count</p>
                                        <input ref={el => inputs.current[0] = el} type="number" className="form-input"/>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="buy-section__input-block">
                                        <p>Count</p>
                                        <input ref={el => inputs.current[0] = el} type="number" className="form-input" onChange={(e) => setCount(e.target.value)}/>
                                    </div>
                                    <div className="buy-section__input-block">
                                        <p>Section</p>
                                        <select ref={el => inputs.current[1] = el} value={place} onChange={(e) => setPlace(e.target.value)} className="form-input buy-section__dropdown">
                                            <option disabled={true} value="">Select Place</option>
                                            {
                                                ticketData.tickets?.map(item => {
                                                    return (
                                                        <option value={item.category} key={item.category}>{item.name}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                    </div>
                                </>
                            )
                        }

                        <div className="buy-section__button">
                            <button className="ticket-button" onClick={onBuyTicket}>Next</button>
                        </div>
                    </div>
                </div>

                <div className="ticket-modal__payment ticket-modal__payment__hidden" ref={paymentBlock}>
                    <Payment emptyField={emptyField}/>
                </div>
            </div>
        </div>
    )
}

export default TicketModal