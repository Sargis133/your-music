import {useEffect, useState} from "react";
import getApiRequest from "../utils/getApiRequest";
import Table from "../components/Table";
import Icons from "../../components/Icons";
import NewItemInputs from "../components/NewItemInputs";
import Alert from "../components/Alert";

function Tickets() {
    const [tickets, setTickets] = useState({})
    const [tableCols, setTableCols] = useState([])
    const [tableItems, setTableItems] = useState([])
    const [sortType, setSortType] = useState("tickets")
    const [categoryType, setCategoryType] = useState("artists")
    const [isShowInputsBlock, setIsShowInputsBlock] = useState(false)
    const [newItemOptions, setNewItemOptions] = useState([])
    const [isShowAlert, setIsShowAlert] = useState(false)


    useEffect(() => {
        getApiRequest("/config/tickets.json").then(data => {
            if(data) {
                const ticketData = {
                    tours: data.tickets.tours,
                    artists: data.tickets.artists,
                    festivals: data.tickets.festivals
                }
                setTickets(ticketData)
                onSortTableItemsType(data.tickets)
            }
        })
    }, []);

    useEffect(() => {
        onSortTableItemsType(tickets)

        setIsShowInputsBlock(false)
        setTimeout(() => setNewItemOptions(getNewItemOptions(tickets)), 500)
    }, [tickets, sortType, categoryType]);

    const artistsTicketTableCols = [
        {
            col_name: "Name",
            col_value: "name"
        },
        {
            col_name: "Image",
            col_value: "cover"
        },
        {
            col_name: "Artist",
            col_value: "artist"
        },
        {
            col_name: "Category",
            col_value: "category"
        },
        {
            col_name: "Date",
            col_value: "date"
        },
        {
            col_name: "Description",
            col_value: "description"
        }
    ]
    const placeTableCols = [
        {
            col_name: "Name",
            col_value: "name"
        },
        {
            col_name: "Place Name",
            col_value: "place"
        },
        {
            col_name: "Count",
            col_value: "count"
        },
        {
            col_name: "Per price",
            col_value: "price"
        }
    ]
    const festivalsTableCols = [
        {
            col_name: "Name",
            col_value: "name"
        },
        {
            col_name: "Image",
            col_value: "cover"
        },
        {
            col_name: "Date",
            col_value: "date"
        },
        {
            col_name: "Description",
            col_value: "description"
        },
        {
            col_name: "Entry",
            col_value: "entry"
        },
    ]

    function getNewItemOptions(data) {
        const artistsData = data.artists?.map(item => {
            return {
                value: item.id,
                name: item.name
            }
        })
        artistsData?.unshift({value: 'new', name: 'New'})

        if(categoryType === "artists" && sortType === 'tickets') {
            return [
                {
                    type: 'select',
                    value: 'artists',
                    options: artistsData
                },
                {
                    type: 'select',
                    value: 'type',
                    options: [{value: 'concert', name: 'Concert'}, {value: 'festival', name: 'Festival'}]
                },
                {
                    type: 'input',
                    value: 'image',
                    placeholder: 'Image'
                },
                {
                    type: 'input',
                    value: 'name',
                    placeholder: 'Name'
                },
                {
                    type: 'input',
                    value: 'artist',
                    placeholder: 'Artist'
                },
                {
                    type: 'input',
                    value: 'date',
                    placeholder: 'Date'
                },
                {
                    type: 'input',
                    value: 'description',
                    placeholder: 'Description'
                },
            ]
        } else if(categoryType === 'artists' && sortType === 'places') {
            return [
                {
                    type: 'select',
                    value: 'artists',
                    options: artistsData
                },
                {
                    type: 'input',
                    value: 'placeName',
                    placeholder: 'Place Name'
                },
                {
                    type: 'input',
                    value: 'count',
                    placeholder: 'Count'
                },
                {
                    type: 'input',
                    value: 'price',
                    placeholder: 'Price'
                }
            ]
        } else if(categoryType === 'festivals') {
            const festivalsData = data.festivals?.map(item => {
                return {
                    value: item.id,
                    name: item.name
                }
            })
            festivalsData.unshift({value: 'new', name: 'New'})
            return [
                {
                    type: 'select',
                    value: 'festivals',
                    options: festivalsData
                },
                {
                    type: 'input',
                    value: 'image',
                    placeholder: 'Image'
                },
                {
                    type: 'input',
                    value: 'date',
                    placeholder: 'Date'
                },
                {
                    type: 'input',
                    value: 'description',
                    placeholder: 'Description'
                },
                {
                    type: 'input',
                    value: 'entry',
                    placeholder: 'Entry'
                },
            ]
        }
    }

    function onSortTableItemsType(data) {
        if(categoryType === "artists") {
            if(sortType === 'tickets') {
                setTableCols(artistsTicketTableCols)
                setTableItems(data.artists)
            } else if(sortType === 'places') {
                const result = []

                data.artists.forEach(ticket => {
                    ticket.tickets?.forEach((place, index) => {
                        result.push({
                            id: ticket.id + '-' + index,
                            name: ticket.name,
                            place: place.name,
                            count: place.count,
                            price: place.price
                        })
                    })
                })

                setTableCols(placeTableCols)
                setTableItems(result)
            }
        } else if(categoryType === "festivals") {
            setTableCols(festivalsTableCols)
            setTableItems(data.festivals)
        }

    }

    function onChangeTableItemValue(id, type, value) {
        console.log(id, type, value)
    }

    function onDeleteTableItem(items) {
        console.log(items)
    }

    function onAddNewItemData(values) {
        setIsShowAlert(true)
        console.log(values)
        setTimeout(() => setIsShowAlert(false), 2000)
    }

    return(
        <div className="category-page">
            <Alert isShow={isShowAlert} type="success" title="Success" text="New item added"/>
            <p className="page-title">Tickets</p>

            <div className="d-flex">
                <select
                    onChange={(e) => setCategoryType(e.target.value)}
                    className="form-input category-page__dropdown"
                >
                    <option value="artists">Artists</option>
                    <option value="festivals">Festivals</option>
                </select>
                {
                    categoryType === "artists" &&
                    <select
                        onChange={(e) => setSortType(e.target.value)}
                        className="form-input category-page__dropdown category-page__category-dropdown"
                    >
                        <option value="tickets">Tickets</option>
                        <option value="places">Places</option>
                    </select>
                }
            </div>

            <button className="table__btn mt-1"
                    onClick={() => isShowInputsBlock ? setIsShowInputsBlock(false) : setIsShowInputsBlock(true)}>
                <Icons name="plus" width="2em" height="2em"/>
            </button>

            <NewItemInputs isShow={isShowInputsBlock} options={newItemOptions} getNewData={onAddNewItemData}/>

            <div className="category-page__content">
                <Table
                    rows={tableItems}
                    cols={tableCols}
                    checkbox={true}
                    buttons={true}
                    perPage={5}
                    changeValues={onChangeTableItemValue}
                    deleteItem={onDeleteTableItem}
                />
            </div>
        </div>
    )
}

export default Tickets