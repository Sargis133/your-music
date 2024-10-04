async function getApiRequest(api)  {
    let result = null;
    try {
        await fetch(api)
            .then(res => {
                return res.json()
            })
            .then(data => {
                result = data
            })
    } catch {
        console.log('Response Error')
    }


    return result
}

export default getApiRequest