

export const getApiResource = async (url) => {
    try {
        const res = await fetch(url)
        // обработка ошибки 404
        if (!res.ok) {
            console.error('res.status ', res.status)
            // код останавливается
            return false
        }
        return await res.json()

    } catch (error) {
        console.error('error.message ', error.message)
        return false
    }
}
// возвращаем через промис
// getApiResource(SWAPI_ROOT + SWAPI_PEOPLE)
//     .then(body => console.log(body))

    // асинхронная функция
    // (async () => {
    //     const body = await getApiResource(SWAPI_ROOT + SWAPI_PEOPLE)
    //     console.log(body)
    // })()

