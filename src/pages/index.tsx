import type {GetServerSideProps, NextPage} from 'next';
import HeaderLegendary from "../components/legendary/header.legendary";
import MainLegendary from "../components/legendary/main.legendary";
import MainBannerEpic from "../components/epic/main-banner.epic";
import WhitePaperEpic from "../components/epic/white-paper.epic";
import ExtentScopeLegendary from "../components/legendary/extent-scope.legendary";
import MainSliderLegendary from "../components/legendary/main-slider.legendary";
import PanelistScopeLegendary from "../components/legendary/panelist-scope.legendary";
import JoinTeamScopeLegendary from "../components/legendary/join-team-scope.legendary";
import SupportUsScopeLegendary from "../components/legendary/support-us-scope.legendary";
import TicketScopeLegendary from "../components/legendary/ticket-scope.legendary";
import OurSupportersScopeLegendary from "../components/legendary/our-supporters-scope.legendary";
import FooterLegendary from "../components/legendary/footer.legendary";
import {fetches} from "../api/fetches";
import {DataSponsors, DataTabContent, PanelistData, SiteGeneral, TopLevel} from "../api/models";
import {Tabs} from "flowbite-react"
import ReactMarkdown from "react-markdown";
import AppContext from "../context/site-context";

interface Props {
    mainContents: TopLevel[],
    sponsors: DataSponsors[],
    tabContents: DataTabContent[],
    siteGeneral: SiteGeneral,
    panelists: PanelistData[]
}

const Home: NextPage<Props> = (
    {
        mainContents,
        sponsors,
        tabContents,
        siteGeneral,
        panelists
    }
) => {
    return (
        <AppContext.Provider value={siteGeneral}>
            <HeaderLegendary/>
            <MainBannerEpic/>
            <MainLegendary>
                <>
                    <MainSliderLegendary/>
                    <WhitePaperEpic/>
                    <div className="tab-group-outer">
                        <Tabs.Group className="app-tabs">
                            {tabContents?.sort((a, b) => a.attributes.list_order - b.attributes.list_order)
                                .map(({id, attributes}) => (
                                    <Tabs.Item
                                        key={id}
                                        active={true}
                                        title={attributes.title}
                                    >
                                        <div className="extent-cell-epic sm:flex sm:flex-row items-center mb-5">
                                            <div className="basis-1/1 sm:basis-1/2 px-3 c-fff">
                                                <ReactMarkdown>
                                                    {attributes.left_content}
                                                </ReactMarkdown>
                                            </div>
                                            <div className="basis-1/1 sm:basis-1/2 px-3 c-fff">
                                                <ReactMarkdown>
                                                    {attributes.right_content}
                                                </ReactMarkdown>
                                            </div>
                                        </div>
                                    </Tabs.Item>
                                ))}
                        </Tabs.Group>
                    </div>
                    <ExtentScopeLegendary mainContents={mainContents}/>
                    <PanelistScopeLegendary panelists={panelists}/>
                    <JoinTeamScopeLegendary/>
                    <SupportUsScopeLegendary/>
                    <TicketScopeLegendary/>
                    <OurSupportersScopeLegendary sponsors={sponsors}/>
                </>
            </MainLegendary>
            <FooterLegendary/>
        </AppContext.Provider>
    )
}


export const getServerSideProps: GetServerSideProps = async (context) => {
    // ...
    const mainContents = await fetches.getMainContents()
    const sponsors = await fetches.getSponsors()
    const tabContents = await fetches.getTabContents()
    const siteGeneral = await fetches.getSiteGeneral()
    const panelists = await fetches.getPanelistsData()

    return {
        props: {
            mainContents,
            sponsors,
            tabContents,
            siteGeneral,
            panelists
        }
    }
}

export default Home
