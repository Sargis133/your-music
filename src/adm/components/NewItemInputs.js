import {useEffect, useRef, useState} from "react";

function NewItemInputs({isShow, options, getNewData}) {
    const newItemInputsBlock = useRef(null)
    const [newItemValues, setNewItemValues] = useState({})

    useEffect(() => {
        isShow ? onShowInputsBlock(true) : onShowInputsBlock(false)
    }, [isShow]);
    
    function onShowInputsBlock(show) {
        if(show) {
            newItemInputsBlock.current.style.cssText = 'max-height: ' + newItemInputsBlock.current.scrollHeight + 'px; overflow: visible'
        } else {
            newItemInputsBlock.current.style.cssText = 'max-height: 0; overflow: hidden'
        }
    }

    useEffect(() => {
        const result = {}
        options.forEach(item => {
            result[item.value] = item.options ? item.options[0].value : ''
        })
        setNewItemValues(result)
    }, [options]);


    return(
        <div className="category-page__new-item-inputs" ref={newItemInputsBlock}>
            {
                options?.map(item => {
                    return item.type === 'select' ?
                        (
                            <select
                                className="form-input"
                                key={item.value}
                                onChange={(e) => newItemValues[item.value] = e.target.value}>
                                    {
                                        item.options?.map((option, index) => {
                                            return (
                                                <option value={option.value} key={option.value}>{option.name}</option>
                                            )
                                        })
                                    }
                            </select>
                        ) : (
                            <input
                                className="form-input"
                                placeholder={item.placeholder}
                                key={item.value}
                                onChange={(e) => newItemValues[item.value] = e.target.value}/>
                        )
                })
            }
            <button onClick={() => getNewData(newItemValues)} className="success-btn">ok</button>
        </div>
    )
}

export default NewItemInputs