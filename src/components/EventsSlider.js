import {Carousel} from "nuka-carousel";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import Auth from "../state/Auth";
import Modal from "./Modal";

function EventsSlider({showModal}) {
    const [eventsData, setEventsData] = useState([])


    // FETCH - Main page first slider events

    async function getEventsData() {
        await fetch("/config/events.json")
            .then(res => res.json())
            .then(data => {
                if(data) {
                    if(data.data.length > 5) data.data = data.data.slice(0, 5)
                    setEventsData(data.data)
                }
            })
    }


    useEffect(() => {
        getEventsData()
    }, []);


    function checkUserAuth(e) {
        e.preventDefault()

        const auth = new Auth()
        if(auth.userIsLogged()) {
            window.location.href = '/tickets'
        } else {
            showModal()
        }
    }


    return (
        <Carousel className="events-slider__slider" showArrows={true} scrollDistance={"screen"}>
            {eventsData.length > 0 && eventsData.map(event => {
                return (
                    <div className="events-slider__item" key={event.id} style={{backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${event.image})`}}>
                        <div className="events-slider__info">
                            <p className="events-slider__item-title">{event.name}</p>
                            <Link to="/tickets" className="ticket-button" onClick={checkUserAuth}>get your tickets</Link>
                        </div>
                    </div>
                )
            })}
        </Carousel>
    )
}

export default EventsSlider;