import Table from "../components/Table";
import {useEffect, useState} from "react";
import getApiRequest from "../utils/getApiRequest";
import Icons from "../../components/Icons";
import NewItemInputs from "../components/NewItemInputs";
import Alert from "../components/Alert";

function News() {
    const [news, setNews] = useState([])
    const [isShowInputsBlock, setIsShowInputsBlock] = useState(false)
    const newItemOptions = [
        {
            type: 'input',
            value: 'title',
            placeholder: 'Title'
        },
        {
            type: 'input',
            value: 'image',
            placeholder: 'Image'
        },
        {
            type: 'input',
            value: 'creator',
            placeholder: 'Creator'
        },
        {
            type: 'input',
            value: 'date',
            placeholder: 'Date'
        },
        {
            type: 'input',
            value: 'category',
            placeholder: 'Category'
        },
        {
            type: 'input',
            value: 'description',
            placeholder: 'Description'
        },
        {
            type: 'input',
            value: 'rating',
            placeholder: 'Rating'
        },
    ]
    const [isShowAlert, setIsShowAlert] = useState(false)


    useEffect(() => {
        getApiRequest("/config/news.json").then(data => {
            if(data) {
                setNews(data.news)
            }
        })
    }, []);

    const tableCols = [
        {
            col_name: "Title",
            col_value: "title"
        },
        {
            col_name: "Image",
            col_value: "image"
        },
        {
            col_name: "Creator",
            col_value: "creator"
        },
        {
            col_name: "Date",
            col_value: "date"
        },
        {
            col_name: "Category",
            col_value: "category"
        },
        {
            col_name: "Description",
            col_value: "description"
        },
        {
            col_name: "Rating",
            col_value: "rating"
        }
    ]

    function onChangeTableItemValue(id, type, value) {
        console.log(id, type, value)
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

            <p className="page-title">News</p>

            <button className="table__btn mt-1"
                    onClick={() => isShowInputsBlock ? setIsShowInputsBlock(false) : setIsShowInputsBlock(true)}>
                <Icons name="plus" width="2em" height="2em"/>
            </button>

            <NewItemInputs isShow={isShowInputsBlock} options={newItemOptions} getNewData={onAddNewItemData}/>

            <div className="category-page__content">
                <Table
                    cols={tableCols}
                    rows={news}
                    perPage={4}
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

export default News