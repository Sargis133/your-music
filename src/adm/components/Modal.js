function Modal({isShow, title, text, buttons, answer}) {
    return(
        <div className={`modal-content ${isShow ? 'active' : ''}`}>
            <div className="modal-content__body">
                {
                    title &&
                    <p className="modal-content__title">{title}</p>
                }
                {
                    text &&
                    <p className="modal-content__text">{text}</p>
                }
                <div className="modal-content__buttons">
                    {
                        buttons &&
                        <button className="success-btn" onClick={() => answer(true)}>Ok</button>
                    }
                    <button className="default-btn" onClick={() => answer(false)}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default Modal