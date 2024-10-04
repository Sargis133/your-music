import PageTitle from "../components/PageTitle";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";
import {useEffect, useState} from "react";
import Modal from "../components/Modal";
import Loader from "../components/Loader";

function Contact() {
    const [formDataErrors, setFormDataErrors] = useState({
        name: false,
        email: false,
        subject: false,
        message: false
    })

    const [formData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })
    const [isShowModal, setIsShowModal] = useState(false)
    const [showLoader, setShowLoader] = useState(false)



    useEffect(() => {
        window.scroll(0, 0)
    }, []);


    function onSendForm() {
        if(!onCheckErrors()) {
            setShowLoader(true)

            setTimeout(() => {
                setShowLoader(false)
                setIsShowModal(true)

                setTimeout(() => {
                    window.location.reload()
                }, 2000)

            }, 3000)
        }

    }

    function onCheckErrors() {
        const errors = {}
        let isValide = false

        Object.entries(formData).forEach(input => {
            if(!input[1]) {
                errors[input[0]] = true
                isValide = true
            }
        })

        setFormDataErrors(errors)

        return isValide

    }

    return(
        <div className="contact-page">
            <Modal isShow={isShowModal} modalData={{title: 'Success', text: 'Data sent'}}/>
            <Loader isShow={showLoader}/>
            <PageTitle title="Contact" image="https://preview.colorlib.com/theme/music/images/contact.jpg.webp"/>
            <div className="contact-page__cols wrapper">
                <div className="contact-page__text-content">
                    <p className="contact-page__title">Get in touch</p>
                    <p className="contact-page__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi condimentum, neque ac porttitor scelerisque, nisi nisl tincidunt enim, non aliquet diam neque sed urna nequ.</p>
                    <div className="contact-page__contacts-list">
                        <p className="contact-page__address"><span>Address: </span>Main Str, no 253, New York, NY</p>
                        <p className="contact-page__address"><span>Phone: </span>+546 990221 123</p>
                        <p className="contact-page__address"><span>E-mail </span>music@contact.com</p>
                    </div>
                </div>

                <div className="contact-page__contact-form">
                    <div>
                        <input
                            onChange={(e) => formData.name = e.target.value}
                            onKeyDown={(e) => e.key === 'Enter' ? onSendForm() : ''}
                            type="text"
                            className={`contact-form__name-input form-input ${formDataErrors.name ? 'error-input' : ''}`}
                            placeholder="Your Name"/>
                        <input
                            onChange={(e) => formData.email = e.target.value}
                            onKeyDown={(e) => e.key === 'Enter' ? onSendForm() : ''}
                            type="text"
                            className={`contact-form__email-input form-input ${formDataErrors.email ? 'error-input' : ''}`}
                            placeholder="Your E-mail"/>
                    </div>
                    <input
                        onChange={(e) => formData.subject = e.target.value}
                        onKeyDown={(e) => e.key === 'Enter' ? onSendForm() : ''}
                        type="text"
                        className={`contact-form__subject-input form-input ${formDataErrors.subject ? 'error-input' : ''}`}
                        placeholder="Subject"/>
                    <textarea
                        onChange={(e) => formData.message = e.target.value}
                        onKeyDown={(e) => e.key === 'Enter' ? onSendForm() : ''}
                        className={`form-input contact-form__textarea ${formDataErrors.message ? 'error-input' : ''}`}
                        placeholder="Message">
                    </textarea>
                    <button className="ticket-button" onClick={onSendForm}>SEND</button>
                </div>
            </div>

            <div className="contact-page__map-section">
                <iframe
                    title="map"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d40693.82859045085!2d44.531540338623046!3d40.202928091511396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sru!2sam!4v1724912773513!5m2!1sru!2sam"
                    width="100%" height="100%"  allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <Subscribe/>
            <Footer/>
        </div>
    )
}

export default Contact;