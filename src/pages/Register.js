import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";
import {useEffect, useState} from "react";
import Auth from "../state/Auth";
import Loader from "../components/Loader";

function Register() {
    const [showLoader, setShowLoader] = useState(false)
    const [registerFormErrors, setRegisterFormErrors] = useState({
        name: false,
        email: false,
        phone: false,
        password: false
    })
    const [registerFormData] = useState({
        name: "",
        email: "",
        phone: "",
        password: ""
    })

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    function checkIsEmptyData() {
        let isEmptyField = false

        const errors = {
            email: false,
            password: false
        }

        Object.entries(registerFormData).forEach(item => {
            if (!item[1]) {
                errors[item[0]] = true;
                isEmptyField = true;
            }
        })

        setRegisterFormErrors(errors)

        if (!isEmptyField) {
            setShowLoader(true)

            const auth = new Auth()
            if(auth.setNewUserToStorage(registerFormData)) {
                window.location.href = "http://localhost:3000/login"
            }
            setShowLoader(false)
        }
    }

    return(
        <div className="register-page">
            <Loader isShow={showLoader}/>
            <div className="register-page__content">
                <p className="register-page__title">Register</p>
                <div className="register-page__form">
                    <input
                        type="text"
                        className={`form-input ${registerFormErrors.name ? 'error-input' : ''}`}
                        placeholder="Name"
                        onChange={(e) => registerFormData.name = e.target.value}
                        onKeyDown={(e) => e.key === 'Enter' ? checkIsEmptyData() : ''}
                    />
                    <input
                        type="text"
                        className={`form-input ${registerFormErrors.email ? 'error-input' : ''}`}
                        placeholder="Email"
                        onChange={(e) => registerFormData.email = e.target.value}
                        onKeyDown={(e) => e.key === 'Enter' ? checkIsEmptyData() : ''}
                    />
                    <input
                        type="text"
                        className={`form-input ${registerFormErrors.phone ? 'error-input' : ''}`}
                        placeholder="Phone"
                        onChange={(e) => registerFormData.phone = e.target.value}
                        onKeyDown={(e) => e.key === 'Enter' ? checkIsEmptyData() : ''}
                    />
                    <input
                        type="password"
                        className={`form-input ${registerFormErrors.password ? 'error-input' : ''}`}
                        placeholder="Password"
                        onChange={(e) => registerFormData.password = e.target.value}
                        onKeyDown={(e) => e.key === 'Enter' ? checkIsEmptyData() : ''}
                    />
                    <button
                        className="ticket-button"
                        onClick={checkIsEmptyData}>Register</button>
                </div>
            </div>
            <Subscribe/>
            <Footer/>
        </div>
    )
}

export default Register;