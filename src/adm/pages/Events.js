import Table from "../components/Table";
import {useEffect, useState} from "react";
import getApiRequest from "../utils/getApiRequest";
import NewItemInputs from "../components/NewItemInputs";
import Icons from "../../components/Icons";
import Alert from "../components/Alert";

function Events() {
    const [events, setEvents] = useState([])
    const [tableItems, setTableItems] = useState([])
    const [sortType, setSortType] = useState('events')
    const [tableCols, setTableCols] = useState([])
    const [isShowInputsBlock, setIsShowInputsBlock] = useState(false)
    const [newItemOptions, setNewItemOptions] = useState([])
    const [isShowAlert, setIsShowAlert] = useState(false)


    useEffect(() => {
        getApiRequest("/config/events.json").then(data => {
            if(data) {
                setEvents(data.data)
                onSortTableItemsType(data.data)
            }
        })
    }, []);

    useEffect(() => {
        onSortTableItemsType(events)

        setIsShowInputsBlock(false)
        setTimeout(() => setNewItemOptions(getNewItemOptions), 500)
    }, [sortType]);


    function getNewItemOptions() {
        if(sortType === 'date') {
            const select = events.map(item => {
                return {
                    value: item.id,
                    name: item.name
                }
            })

            select.unshift({
                value: 'new',
                name: 'New'
            })

            return [
                {
                    type: "select",
                    value: "event",
                    options: select
                },
                {
                    type: 'input',
                    value: "name",
                    placeholder: "Name"
                },
                {
                    type: 'input',
                    value: 'day',
                    name: "Day"
                },
                {
                    type: 'input',
                    value: 'price',
                    name: "Price"
                }
            ]
        } else if(sortType === 'events') {
            return [
                {
                    type: 'input',
                    value: "name",
                    placeholder: "Name"
                },
                {
                    type: 'input',
                    value: 'image',
                    placeholder: 'Image'
                },
                {
                    type: 'input',
                    value: 'year',
                    placeholder: "Year"
                }
            ]
        }
    }


    const tableEventsCols = [
        {
            col_name: "Name",
            col_value: "name"
        },
        {
            col_name: "Image",
            col_value: "image"
        },
        {
            col_name: "Year",
            col_value: "year"
        }
    ]
    const tableDateCols = [
        {
            col_name: 'Name',
            col_value: 'name'
        },
        {
            col_name: 'Day',
            col_value: 'day'
        },
        {
            col_name: 'Price',
            col_value: 'price'
        }
    ]

    function onSortTableItemsType(data) {
        if(sortType === 'events') {
            setTableItems(data)
            setTableCols(tableEventsCols)
        } else {
            const eventDates = []

            data.forEach((event, evt_index) => {
                event.date.forEach((date, index) => {
                    eventDates.push({
                        id: evt_index + '-'+ index,
                        name: event.name,
                        day: date.day,
                        price: date.price
                    })
                })
            })

            setTableItems(eventDates)
            setTableCols(tableDateCols)
        }
    }

    function onChangeTableItemValue(id, type, newValue) {
        console.log(id + ' - ' + type + ' ' + newValue)
    }

    function onDeleteTableItem(items) {
        console.log(items)
    }

    function onAddNewItemData(data) {
        setIsShowAlert(true)
        console.log(data)
        setTimeout(() => setIsShowAlert(false), 2000)
    }


    return(
        <div className="category-page">
            <Alert isShow={isShowAlert} type="success" title="Success" text="New item added"/>

            <p className="page-title">Events</p>

            <select className="form-input category-page__dropdown" onChange={(e) => setSortType(e.target.value)}>
                <option value="events">Events</option>
                <option value="date">Events Dates</option>
            </select>

            <button className="table__btn mt-1" onClick={() => isShowInputsBlock ? setIsShowInputsBlock(false) : setIsShowInputsBlock(true)}>
                <Icons name="plus" width="2em" height="2em"/>
            </button>

            <NewItemInputs isShow={isShowInputsBlock} options={newItemOptions} getNewData={onAddNewItemData}/>

            <div className="category-page__content">
                <Table
                    cols={tableCols}
                    rows={tableItems}
                    perPage={5}
                    buttons={true}
                    checkbox={true}
                    changeValues={onChangeTableItemValue}
                    deleteItem={onDeleteTableItem}
                    newItemData={onAddNewItemData}
                />
            </div>
        </div>
    )
}
export default Events;