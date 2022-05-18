import {HTTP, HTTPS} from "@constants/api";

/**
 * Изменяем URL с HTTP на HTTPS
 * @param {String} url - url для изменения
 * @returns {String} - url c HTTPS
 */
export const changeHTTP = url => {
    const result = url ? url.replace(HTTP, HTTPS) : url
    return result
}
/**
 * Отправляет запрос Fetch
 * @param url - url для запроса
 * @returns {Promise<boolean|any>} - Promise с результатам запроса
 */
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

