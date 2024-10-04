function Alert({isShow, title, text, type}) {
    const styleType = {
        error: "error-alert",
        success: "success-alert"
    }
    return(
        <div className={`alert-block ${isShow ? 'show' : ''}`}>
            <div className={`alert-block__content ${styleType[type]}`}>
                {
                    title &&
                    <p className="alert-block__title">{title}</p>
                }
                {
                    text &&
                    <p className="alert-block__text">{text}</p>
                }
            </div>
        </div>
    )
}
export default Alert