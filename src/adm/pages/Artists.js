import Table from "../components/Table";
import {useEffect, useState} from "react";
import getApiRequest from "../utils/getApiRequest";
import Icons from "../../components/Icons";
import NewItemInputs from "../components/NewItemInputs";
import Alert from "../components/Alert";

function Artists() {
    const [artists, setArtists] = useState([])
    const [tableItems, setTableItems] = useState([])
    const [tableCols, setTableCols] = useState([])
    const [sortType, setSortType] = useState("artists")
    const [isShowInputsBlock, setIsShowInputsBlock] = useState(false)
    const [newItemOptions, setNewItemOptions] = useState([])
    const [isShowAlert, setIsShowAlert] = useState(false)


    useEffect(() => {
        getApiRequest("/config/artists.json").then(data => {
            if(data) {
                setArtists(data.artists)
                onSortTableItemsType(data.artists)
            }
        })
    }, []);

    useEffect(() => {
        onSortTableItemsType(artists)

        setIsShowInputsBlock(false)
        setTimeout(() => setNewItemOptions(getNewItemOptions), 500)
    }, [sortType]);

    const artistsTableCols = [
        {
            col_name: "Name",
            col_value: "name"
        },
        {
            col_name: "Image",
            col_value: "image"
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
            col_name: "Born",
            col_value: "born"
        },
        {
            col_name: "First Release",
            col_value: "firstRelease"
        },
        {
            col_name: "First Album",
            col_value: "firstAlbum"
        }
    ]
    const audioTableCols = [
        {
            col_name: "Executor",
            col_value: "executor"
        },
        {
            col_name: "Name",
            col_value: "name"
        },
        {
            col_name: "File",
            col_value: "file"
        },
        {
            col_name: "Album",
            col_value: "album"
        }
    ]
    const albumsTableCols = [
        {
            col_name: "Artist",
            col_value: "artist"
        },
        {
            col_name: "Album",
            col_value: "name"
        },
        {
            col_name: "Description",
            col_value: "description"
        }
    ]

    function getNewItemOptions() {
        const artistsData = artists.map(artist => {
            return {
                value: artist.id,
                name: artist.name
            }
        })
        artistsData.unshift({
            value: "new",
            name: "Artist"
        })
        const albumData = artists.map(artist => {
            return {
                value: artist.album.title,
                name: artist.album.title
            }
        })
        albumData.unshift({
            value: "new",
            name: "Album"
        })

        if(sortType === "artists") {
            return [
                {
                    type: 'input',
                    value: "name",
                    placeholder: "Name"
                },
                {
                    type: 'input',
                    value: "image",
                    placeholder: "Image"
                },
                {
                    type: 'input',
                    value: "category",
                    placeholder: "Category"
                },
                {
                    type: 'input',
                    value: "description",
                    placeholder: "Description"
                },
                {
                    type: 'input',
                    value: "born",
                    placeholder: "Born"
                },
                {
                    type: 'input',
                    value: "firstRelease",
                    placeholder: "First Release"
                },
                {
                    type: 'input',
                    value: "firstAlbum",
                    placeholder: "First Album"
                },
            ]
        } else if (sortType === "albums") {
            return [
                {
                    type: "select",
                    value: "artist",
                    options: artistsData
                },
                {
                    type: "select",
                    value: "album",
                    options: albumData
                },
                {
                    type: "input",
                    value: "description",
                    placeholder: "Description"
                }
            ]
        } else if(sortType === "audio") {
            return [
                {
                    type: "select",
                    value: "artist",
                    options: artistsData
                },
                {
                    type: "select",
                    value: "album",
                    options: albumData
                },
                {
                    type: "input",
                    value: "name",
                    placeholder: "Name"
                },
                {
                    type: "input",
                    value: "file",
                    placeholder: "File"
                }
            ]
        }
    }

    function onChangeTableItemValue(id, type, newValue) {
        console.log("Change item values if id = " + id,", and type = " + type, newValue)
    }

    function onDeleteTableItem(items) {
        console.log(items)
    }

    function onSortTableItemsType(data) {
        if(sortType === 'artists') {
            setTableCols(artistsTableCols)
            setTableItems(data)
        } else if(sortType === 'audio') {
            const result = []

            data.forEach(artist => {
                artist.album?.audios?.forEach((audio, index) => {
                    result.push({
                        id: artist.id + '-' + index,
                        executor: artist.name,
                        name: audio.name,
                        file: audio.file,
                        album: artist.album.title
                    })
                })
            })

            setTableCols(audioTableCols)
            setTableItems(result)
        } else if(sortType === "albums") {
            const result = []

            data.forEach(artist => {
                result.push({
                    id: artist.id,
                    artist: artist.name,
                    name: artist.album.title,
                    description: artist.album.description
                })
            })

            setTableCols(albumsTableCols)
            setTableItems(result)
        }
    }

    function onAddNewItemData(data) {
        setIsShowAlert(true)
        console.log(data)
        setTimeout(() => setIsShowAlert(false), 2000)
    }

    return(
        <div className="category-page">
            <Alert isShow={isShowAlert} type="success" title="Success" text="New item added"/>

            <p className="page-title">Artists</p>

            <select
                onChange={(e) => setSortType(e.target.value)}
                className="form-input category-page__dropdown"
            >
                <option value="artists">Artists</option>
                <option value="albums">Albums</option>
                <option value="audio">Audios</option>
            </select>

            <button className="table__btn mt-1"
                    onClick={() => isShowInputsBlock ? setIsShowInputsBlock(false) : setIsShowInputsBlock(true)}>
                <Icons name="plus" width="2em" height="2em"/>
            </button>

            <NewItemInputs isShow={isShowInputsBlock} options={newItemOptions} getNewData={onAddNewItemData}/>


            <div className="category-page__content">
                <Table
                    cols={tableCols}
                    rows={tableItems}
                    checkbox={true}
                    buttons={true}
                    changeValues={onChangeTableItemValue}
                    deleteItem={onDeleteTableItem}
                    newItemData={onAddNewItemData}
                    perPage={8}
                />
            </div>
        </div>
    )
}

export default Artists;