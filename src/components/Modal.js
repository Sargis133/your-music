
function Modal({isShow = false, modalData}) {

    return(
        <div className={`modal-content ${isShow ? 'modal-content-active' : ''} ${modalData.type || 'success'}`}>
            <div className="modal-content__content">
                <div className="modal-body">
                    <div className="modal-title">{modalData?.title || ''}</div>
                    <div className="modal-text">{modalData?.text || ''}</div>
                </div>
            </div>
        </div>
    )
}

export default Modal