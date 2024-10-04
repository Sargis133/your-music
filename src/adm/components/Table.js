import Icons from "../../components/Icons";
import {useEffect, useRef, useState} from "react";
import Pagination from "react-js-pagination";
import Modal from "./Modal";
import Alert from "./Alert";


function Table({cols, rows, checkbox, perPage, buttons, changeValues, deleteItem, newItemData}) {
    const [currentPage, setCurrentPage] = useState(1)
    const [pageItems, setPageItems] = useState([])
    const [selectedItems, setSelectedItems] = useState([])
    const [isShowModal, setIsShowModal] = useState(false)
    const [removeItemId, setRemoveItemId] = useState(-1)

    const tableNewRow = useRef(null)

    useEffect(() => {
        onChangeTablePage(1)
        onResetNewItemInputs()
    }, [rows]);


    function onEditTableItem(evt, id, type) {
        const item = evt.target;
        item.classList.add('textarea-active');
        item.removeAttribute('readonly');

        item.addEventListener("keydown", (e) => {
            if(e.key === "Enter") onClickOutside(false)
        })

        document.addEventListener('click', onClickOutside)

        function onClickOutside(e) {
            if(!item.contains(e.target)) {
                item.classList.remove('textarea-active')
                item.setAttribute('readonly', true)

                changeValues(id, type, item.value)

                document.removeEventListener("click", onClickOutside)
            }
        }
    }

    function onDeleteTableItem(id) {
        if(id >= 0) setRemoveItemId(id)
        else setRemoveItemId(-1)

        setIsShowModal(true)
    }

    function onCheckModalAnswer(answer) {
        if(answer) {
            const deleteItems = []

            if(removeItemId >= 0) {
                deleteItems.push(pageItems.find(item => +item.id === +removeItemId))
            } else {
                pageItems.forEach(item => {
                    if(selectedItems.includes(item.id)) {
                        deleteItems.push(item)
                    }
                })
            }
            deleteItem(deleteItems)
            setIsShowModal(false)
        } else {
            setIsShowModal(false)
        }
    }

    function onSelectItemCheckbox(e, id) {
        if(e.target.checked) {
            setSelectedItems([...selectedItems, id])
        }
        else {
            setSelectedItems(selectedItems.filter(item => +item !== +id))
        }
    }

    function selectAll(e) {
        const selected = pageItems.map(item => item.id)

        if(e.target.checked) {
            setSelectedItems(selected)
        } else {
            setSelectedItems([])
        }

    }

    function onChangeTablePage(pageNumber) {
        setCurrentPage(pageNumber);
        const itemsPerPage = perPage || 4;
        const sliceStart = (pageNumber - 1) * itemsPerPage;
        const slicedItems = Array.isArray(rows) ? [...rows].slice(sliceStart, sliceStart + itemsPerPage) : [];

        setPageItems(slicedItems);
    }

    function onResetNewItemInputs() {
        tableNewRow.current?.querySelectorAll("input")?.forEach(item => item.value = '')
    }


    return (
        <div className="table-content">
            <Modal
                isShow={isShowModal}
                title="Confirm question"
                text="Are you sure to delete item?"
                buttons={true}
                answer={onCheckModalAnswer}
            />
            {
                buttons && (
                    <div className="table-content__config-buttons">
                        <button className={`table__btn ${selectedItems.length > 0 ? '' : 'table__btn-hidden'}`}
                                onClick={() => onDeleteTableItem()}>
                            <Icons name="trash" width="2em" height="2em"/>
                        </button>
                    </div>
                )
            }

            <div className="table-aside">
                <table className="table">
                    <thead className="table__header">
                    <tr className="table__cols">
                        {
                            checkbox && (
                                <th className="table__col table__col-checkbox">
                                    <input
                                        type="checkbox"
                                        onChange={(e) => selectAll(e)}
                                    />
                                </th>
                            )
                        }
                        {
                            cols.map((col) => {
                                return (
                                    <th
                                        key={col.col_value}
                                        className={`table__col ${col.col_value === 'id' ? 'table__id-col' : ''}`}
                                    >{col.col_name}</th>
                                )
                            })
                        }
                        {
                            buttons && (
                                <th className="table__col table__col-button">
                                </th>
                            )
                        }
                    </tr>
                    </thead>
                    <tbody className="table__body">

                    {
                        pageItems.map((rowsItems, index) => {
                            return (
                                <tr key={rowsItems.id} className="table__rows">
                                    {/*Table Checkbox*/}
                                    {
                                        checkbox && (
                                            <th>
                                                <input
                                                    type="checkbox"
                                                    checked={selectedItems.includes(rowsItems.id)}
                                                    onChange={(e) => onSelectItemCheckbox(e, rowsItems.id)}/>
                                            </th>
                                        )
                                    }
                                    {/*Table Row Items*/}
                                    {
                                        cols.map((col) => {
                                            return (
                                                <th key={col.col_value} className="table__row" title="edit">
                                                    {
                                                        col.col_value === 'image' || col.col_value === "cover" ? (
                                                            <div>
                                                                <img
                                                                    src={rowsItems[col.col_value]}
                                                                    className="table__row-image"
                                                                />
                                                                <textarea
                                                                    defaultValue={rowsItems[col.col_value]}
                                                                    className="table__row-textarea"
                                                                    onClick={(e) => onEditTableItem(e, rowsItems.id, col.col_value)}
                                                                    readOnly={true}>
                                                                </textarea>
                                                            </div>
                                                        ) : (
                                                            <textarea
                                                                defaultValue={rowsItems[col.col_value]}
                                                                className="table__row-textarea"
                                                                onClick={(e) => onEditTableItem(e, rowsItems.id, col.col_value)}
                                                                readOnly={true}>
                                                            </textarea>
                                                        )
                                                    }

                                                </th>
                                            )
                                        })
                                    }
                                    {/*Buttons*/}
                                    {
                                        buttons && (
                                            <th className="table__row table__row-buttons">
                                                <button className="table__btn"
                                                        onClick={() => onDeleteTableItem(rowsItems.id)}>
                                                    <Icons name="trash" width="2em" height="2em"/>
                                                </button>
                                            </th>
                                        )
                                    }
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
            <div className="table-pagination">
                <Pagination
                    totalItemsCount={rows?.length || 0}
                    itemsCountPerPage={perPage || 4}
                    activePage={currentPage}
                    onChange={(e) => onChangeTablePage(e)}
                />
            </div>
        </div>
    )
}

export default Table;