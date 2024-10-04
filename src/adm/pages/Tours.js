import Table from "../components/Table";
import {useEffect, useState} from "react";
import getApiRequest from "../utils/getApiRequest";
import Icons from "../../components/Icons";
import NewItemInputs from "../components/NewItemInputs";
import Alert from "../components/Alert";

function Tours() {
    const [tours, setTours] = useState([])
    const [isShowInputsBlock, setIsShowInputsBlock] = useState(false)
    const newItemOptions = [
        {
            type: 'input',
            value: 'name',
            placeholder: 'Name'
        },
        {
            type: 'input',
            value: 'date',
            placeholder: 'Date'
        },
        {
            type: 'input',
            value: 'location',
            placeholder: 'Location'
        }
    ]
    const [isShowAlert, setIsShowAlert] = useState(false)


    useEffect(() => {
        getApiRequest("/config/tours.json").then(data => {
            if(data) {
                setTours(data.tours)
            }
        })
    }, []);

    const tableCols = [
        {
            col_name: "Name",
            col_value: "tourName"
        },
        {
            col_name: "Date",
            col_value: "date"
        },
        {
            col_name: "Location",
            col_value: "location"
        }
    ]

    function onDeleteTableItem(items) {
        console.log(items)
    }

    function onChangeTableItem(id, type, value) {
        console.log(id, type, value)
    }

    function onAddNewItemData(data) {
        setIsShowAlert(true)
        console.log(data)
        setTimeout(() => setIsShowAlert(false), 2000)
    }

    return(
        <div className="category-page">
            <Alert isShow={isShowAlert} type="success" title="Success" text="New item added"/>

            <p className="page-title">Tours</p>

            <button className="table__btn mt-1"
                    onClick={() => isShowInputsBlock ? setIsShowInputsBlock(false) : setIsShowInputsBlock(true)}>
                <Icons name="plus" width="2em" height="2em"/>
            </button>

            <NewItemInputs isShow={isShowInputsBlock} options={newItemOptions} getNewData={onAddNewItemData}/>

            <div className="category-page__content">
                <Table
                    cols={tableCols}
                    rows={tours}
                    checkbox={true}
                    buttons={true}
                    deleteItem={onDeleteTableItem}
                    changeValues={onChangeTableItem}
                    newItemData={onAddNewItemData}
                    perPage={6}
                />
            </div>
        </div>
    )
}

export default Tours