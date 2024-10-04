import Table from "../components/Table";
import {useEffect, useState} from "react";
import getApiRequest from "../utils/getApiRequest";
import NewItemInputs from "../components/NewItemInputs";
import Icons from "../../components/Icons";
import Alert from "../components/Alert";

function Featured() {
    const [featured, setFeatured] = useState([])
    const [isShowInputsBlock, setIsShowInputsBlock] = useState(false)
    const newItemOptions = [
        {
            type: 'input',
            value: 'name',
            placeholder: 'Name'
        },
        {
            type: 'input',
            value: 'image',
            placeholder: 'Image'
        },
        {
            type: 'input',
            value: 'song',
            placeholder: 'Song'
        },
        {
            type: 'input',
            value: 'file',
            placeholder: 'File'
        },
        {
            type: 'input',
            value: 'rating',
            placeholder: 'Rating'
        }
    ]
    const [isShowAlert, setIsShowAlert] = useState(false)


    useEffect(() => {
        getApiRequest("/config/featured.json").then(data => {
            if(data) {
                setFeatured(data.data)
            }
        })
    }, []);

    const tableCols = [
        {
            col_name: "Name",
            col_value: "name"
        },
        {
            col_name: "Image",
            col_value: "image"
        },
        {
            col_name: "Song",
            col_value: "popularSong"
        },
        {
            col_name: "File",
            col_value: "file"
        },
        {
            col_name: "Rating",
            col_value: "rating"
        }
    ]

    function onDeleteTableItems(items) {
        console.log(items)
    }

    function onChangeTableItemValues(id, type, value) {
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

            <p className="page-title">Featured Artists</p>

            <button className="table__btn mt-1"
                    onClick={() => isShowInputsBlock ? setIsShowInputsBlock(false) : setIsShowInputsBlock(true)}>
                <Icons name="plus" width="2em" height="2em"/>
            </button>

            <NewItemInputs isShow={isShowInputsBlock} options={newItemOptions} getNewData={onAddNewItemData}/>

            <div className="category-page__content">
                <Table
                    rows={featured}
                    cols={tableCols}
                    checkbox={true}
                    buttons={true}
                    perPage={5}
                    deleteItem={onDeleteTableItems}
                    changeValues={onChangeTableItemValues}
                    newItemData={onAddNewItemData}
                />
            </div>
        </div>
    )
}

export default Featured