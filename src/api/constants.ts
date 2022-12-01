import axios from "axios";

const API_KEY: string = "abb40ccb909c6d67c7190cfc4123f7603c88a1036c4da5d0f271da660f28ec5e18c36112b44f5102e1408e1b4544b7af3b7e6c75c3301f930ad0e759404a2d27ff00ecd0b7d22d6ddb0e15a6b7e98be1d81ee2bd9afeb4f5e44fbe332c0b2e389f2b14da7c3457edd4fcb389cba867e78c4877f3fcfc002fe01908e65ec7abc3"

export const BASE_URL: string = "http://web3devsummit.istanbul:1337"

export const createAxios = () => axios.create({
    baseURL: BASE_URL,
    headers: {
        Authorization: `Bearer ${API_KEY}`
    }
})

const PREFIX = "/api"

export const API_PATHS = {
    mainContent: (locale: string) => `${PREFIX}/main-contents?locales=${locale}&populate=*`,
    sponsors: (locale: string) => `${PREFIX}/sponsors?locale=${locale}&populate[1]=sponsors.logo`,
    tabContent: (locale: string) => `${PREFIX}/tab-contents?locale=${locale}&populate=*`,
    siteGeneral: (locale: string) => `${PREFIX}/site-dictionary?locale=${locale}&populate=*`,
    panelists: (locale: string) => `${PREFIX}/panelists?locale=${locale}&populate=*`,
    panels: (locale: string) => `${PREFIX}/panels?locale=${locale}&populate=*`,
    workshops: (locale: string) => `${PREFIX}/workshops?locale=${locale}&populate=*`,
}
