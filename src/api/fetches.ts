import {API_PATHS, createAxios} from "./constants";
import {TopLevel} from "./models";

const getData = async (url: string) => {
    const res = await createAxios().get(url)
    const data = await res.data.data
    if (data) return data
    return null
}

export const fetches = {
    async getMainContents() {
        const url = API_PATHS.mainContent
        return await getData(url) as TopLevel[]
    }
}