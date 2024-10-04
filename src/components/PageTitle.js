import SimpleParallax from "simple-parallax-js";

function PageTitle(props) {
    return(
        <div className="page-title__content">
            <div className="page-title__parallax">
                <SimpleParallax scale="1.1" overflow={false}>
                    <img src={props.image} alt="img" className="parallax-image"/>
                </SimpleParallax>
            </div>
            <div className="page-title__title wrapper">
                <p>{props.title}</p>
            </div>
        </div>
    )
}

export default PageTitle;