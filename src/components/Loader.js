import {useRef} from "react";

function Loader({isShow}) {
    const loaderBlock = useRef(null)

    return(
        <div className={`loader ${!isShow ? 'hide-loader' : ''}`} ref={loaderBlock}>
            <div className="loader-circle"></div>
        </div>
    )
}
export default Loader