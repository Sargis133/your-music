import {useRef, useState} from "react";
import AdmAuth from "../../state/AdmAuth";
import Alert from "../components/Alert";

function Login() {
    const loginInput = useRef(null)
    const passwordInput = useRef(null)
    const [isShowAlert, setIsShowAlert] = useState(false)

    const loginData = {
        login: loginInput,
        password: passwordInput
    }

    function onCheckLoginData() {
        let isEmpty = false

        Object.entries(loginData).forEach(item => {
            if(item[1].current?.value) {
                item[1].current.classList.remove('error-input')
            } else {
                item[1].current.classList.add('error-input')
                isEmpty = true
            }
        })

        if(!isEmpty) {
            const data = {
                login: loginInput.current.value,
                password: passwordInput.current.value
            }

            const admAuth = new AdmAuth()
            const response = admAuth.checkAdminData(data)
            if(response === "success") {
                window.location.href = '/adm'
            } else if(response === "not found") {
                setIsShowAlert(true)
                setTimeout(() => setIsShowAlert(false), 2000)
            }
        }
    }

    return(
        <div className="login-page__content">
            <Alert isShow={isShowAlert} type="error" title="Error" text="Data not found"/>
            <p className="login-page__title">Login</p>
            <div className="login-page__form">
                <input
                    ref={loginInput}
                    type="text"
                    className="form-input"
                    placeholder="Login"
                    onKeyDown={(e) => e.key === 'Enter' ? onCheckLoginData() : ''}
                />
                <input
                    ref={passwordInput}
                    type="password"
                    className="form-input"
                    placeholder="Password"
                    onKeyDown={(e) => e.key === 'Enter' ? onCheckLoginData() : ''}
                />
            </div>
            <button
                onClick={onCheckLoginData}
                className="success-btn login-page__btn"
            >Ok</button>
        </div>
    )
}
export default Login