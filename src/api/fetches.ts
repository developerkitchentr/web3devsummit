import {API_PATHS, createAxios} from "./constants";
import {DataPanels, DataSponsors, DataTabContent, PanelistData, SiteGeneral, TopLevel, Volunteers} from "./models";

const getData = async (url: string) => {
    const res = await createAxios().get(url)
    const data = await res.data.data
    if (data) return data
    return null
}

export const fetches = {
    async getMainContents(locale: string) {
        const url = API_PATHS.mainContent(locale)
        return await getData(url) as TopLevel[]
    },
    async getSponsors(locale: string) {
        const url = API_PATHS.sponsors(locale)
        return await getData(url) as DataSponsors[]
    },
    async getTabContents(locale: string) {
        const url = API_PATHS.tabContent(locale)
        return await getData(url) as DataTabContent[]
    },
    async getSiteGeneral(locale: string) {
        const url = API_PATHS.siteGeneral(locale)
        return await getData(url) as SiteGeneral
    },
    async getPanelistsData(locale: string) {
        const url = API_PATHS.panelists(locale)
        return await getData(url) as PanelistData[]
    },
    async getPanels(locale: string) {
        const url = API_PATHS.panels(locale)
        return await getData(url) as DataPanels[]
    },
    async getWorkshops(locale: string) {
        const url = API_PATHS.workshops(locale)
        return await getData(url) as DataPanels[]
    },
    async getVolunteers(locale: string) {
        const url = API_PATHS.volunteerMentor(locale)
        return await getData(url) as Volunteers[]
    }
}
