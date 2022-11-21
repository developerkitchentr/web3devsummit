import {API_PATHS, createAxios} from "./constants";
import {DataSponsors, DataTabContent, PanelistData, SiteGeneral, TopLevel} from "./models";

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
    },
    async getSponsors() {
        const url = API_PATHS.sponsors
        return await getData(url) as DataSponsors[]
    },
    async getTabContents() {
        const url = API_PATHS.tabContent
        return await getData(url) as DataTabContent[]
    },
    async getSiteGeneral() {
        const url = API_PATHS.siteGeneral
        return await getData(url) as SiteGeneral
    },
    async getPanelistsData() {
        const url = API_PATHS.panelists
        return await getData(url) as PanelistData[]
    }
}
