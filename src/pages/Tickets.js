import Footer from "../components/Footer";
import {useEffect, useState} from "react";
import TicketModal from "../components/TicketModal";
import Auth from "../state/Auth";
import {useNavigate} from "react-router-dom";


function Tickets() {
    const [tickets, setTickets] = useState([])
    const [filteredTickets, setFilteredTickets] = useState([]);
    const [searchInput, setSearchInput] = useState('')
    const [selectedTicket, setSelectedTicket] = useState({})
    const [isShowModal, setIsShowModal] = useState(false)
    const navigate = useNavigate()
    const [isEmptyField, setIsEmptyField] = useState(false)

    // FETCH - All Tickets
    async function getTicketsData() { // tomseri(tickets) fetch
        await fetch("/config/tickets.json") // tomseri(ticket) data
            .then(res => res.json())
            .then(data => {
                if(data) {
                    const allTickets = []
                    allTickets.push(...data.tickets.tours)
                    allTickets.push(...data.tickets.artists)
                    allTickets.push(...data.tickets.festivals)
                    setTickets(allTickets)
                    filterTickets()
                    setFilteredTickets(allTickets);
                }
            })
    }


    useEffect(() => {
        getTicketsData();

        const auth = new Auth()
        if(!auth.userIsLogged()) {
            navigate(-1)
        }
    }, []);


    useEffect(() => {
        filterTickets()
    }, [tickets]);


    function filterTickets() {
        if (searchInput) {
            setFilteredTickets(tickets.filter(item => item.name.toLowerCase().includes(searchInput.toLowerCase())));
        } else {
            setFilteredTickets(tickets); // Reset to all tickets if search input is empty
        }
    }


    function openTicketModal(ticket) {
        setSelectedTicket(ticket)
        setIsShowModal(true)
        document.body.style.overflow = 'hidden'
        setIsEmptyField(false)

    }


    function closeModal() {
        setIsShowModal(false)
        document.body.style.overflow = 'auto'
        setIsEmptyField(true)
    }


    return(
        <div className="tickets-page" >
            <TicketModal ticketData={selectedTicket} isShow={isShowModal} closeModal={closeModal} emptyField={isEmptyField}/>

            <div className="tickets-page__tickets-search wrapper">
                <div className="tickets-search__form">
                    <input type="text" className="form-input" onChange={(e) => setSearchInput(e.target.value)}/>
                    <button className="ticket-button" onClick={filterTickets}>Search</button>
                </div>
            </div>

            <div className="tickets-page__tickets-items wrapper">

                {
                    filteredTickets.map((ticket,index) => {
                        return(
                            <div className="tickets-page__ticket" key={index} >
                                <div className="ticket-image">
                                    <img src={ticket.cover} alt=""/>
                                </div>
                                <div className="ticket-information">
                                    <p className="ticket-information__name">{ticket.name}</p>
                                    <p className="ticket-information__category">{ticket.category}</p>
                                    <p className="ticket-information__date">{ticket.date}</p>
                                </div>
                                <button className="ticket-button tickets-page__buy" onClick={() => openTicketModal(ticket)}>Buy</button>
                            </div>
                        )
                    })
                }

            </div>
            <Footer/>
        </div>
    )
}

export default Tickets;