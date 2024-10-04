import Footer from "../components/Footer";
import Subscribe from "../components/Subscribe";
import {useEffect, useState} from "react";
import Auth from "../state/Auth";
import Modal from "../components/Modal";
import Loader from "../components/Loader";

function Login() {
    const [loginFormErrors, setLoginFormErrors] = useState({
        email: false,
        password: false
    })
    const [loginFormData] = useState({
        email: "",
        password: ""
    })

    const [modalData, setModalData] = useState({})
    const [showLoader, setShowLoader] = useState(false)
    let [isShowModal, setIsShowModal] = useState(false)


    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);


    function checkIsEmptyData() {
        setShowLoader(true)

        let isEmptyField = false
        const errors = {
            email: false,
            password: false
        }

        Object.entries(loginFormData).forEach(item => {
            if (!item[1]) {
                errors[item[0]] = true;
                isEmptyField = true;
            }
        })

        setLoginFormErrors(errors)

        if (!isEmptyField) {
            setTimeout(() => {
                setShowLoader(false)
                const auth = new Auth();
                if(auth.checkLoginData(loginFormData)) {
                    window.location.href = "http://localhost:3000/"
                } else {
                    const data = {
                        type: 'error',
                        title: "Oops",
                        text: "User not found"
                    }

                    setModalData(data)
                    setIsShowModal(true)
                    setTimeout(() => {
                        setIsShowModal(false)
                    }, 2500)
                }
            }, 1500)
        }
    }



    return(
        <div>
            <Modal isShow={isShowModal} modalData={modalData}/>
            <Loader isShow={showLoader}/>
            <div className="login-page wrapper">
                <p className="login-page__title">Login</p>
                <div className="login-page__form">
                    <input type="text"
                           onChange={(e) => loginFormData.email = e.target.value}
                           onKeyDown={(e) => e.key === 'Enter' ? checkIsEmptyData() : ''}
                           placeholder="Your E-mail"
                           className={`form-input ${loginFormErrors.email ? 'error-input' : ''}`}
                    />
                    <input type="password"
                           onChange={(e) => loginFormData.password = e.target.value}
                           onKeyDown={(e) => e.key === 'Enter' ? checkIsEmptyData() : ''}
                           placeholder="Password"
                           className={`form-input ${loginFormErrors.password ? 'error-input' : ''}`}
                    />
                    <button
                        className="ticket-button login-form-btn"
                        onClick={checkIsEmptyData}
                    >Login</button>
                </div>
            </div>
            <Subscribe/>
            <Footer/>
        </div>
    )
}

export default Login;