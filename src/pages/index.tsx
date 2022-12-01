import type { GetServerSideProps, NextPage } from 'next';
import HeaderLegendary from "../components/legendary/header.legendary";
import MainLegendary from "../components/legendary/main.legendary";
import MainBannerEpic from "../components/epic/main-banner.epic";
import WhitePaperEpic from "../components/epic/white-paper.epic";
import ExtentScopeLegendary from "../components/legendary/extent-scope.legendary";
import MainSliderLegendary from "../components/legendary/main-slider.legendary";
import PanelistScopeLegendary from "../components/legendary/panelist-scope.legendary";
import JoinTeamScopeLegendary from "../components/legendary/join-team-scope.legendary";
import TicketScopeLegendary from "../components/legendary/ticket-scope.legendary";
import OurSupportersScopeLegendary from "../components/legendary/our-supporters-scope.legendary";
import FooterLegendary from "../components/legendary/footer.legendary";
import ScopeHeadersEpic from "../components/epic/scope-headers.epic";
import { fetches } from "../api/fetches";
import { DataPanels, DataSponsors, DataTabContent, PanelistData, SiteGeneral, TopLevel } from "../api/models";
import ReactMarkdown from "react-markdown";
import AppContext from "../context/site-context";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Image from "next/image";
import Head from "next/head";
import { copy } from "../utils/helpers";
import PanelsScopeLegendary from "../components/legendary/panels-scope.legendary";
import WorkshopScopeLegendary from "../components/legendary/workshop-scope.legendary";

interface Props {
    mainContents: TopLevel[],
    sponsors: DataSponsors[],
    tabContents: DataTabContent[],
    siteGeneral: SiteGeneral,
    panelists: PanelistData[],
    panels: DataPanels[];
    workshops: DataPanels[];
    locale: string
}

const Home: NextPage<Props> = (
    {
        mainContents,
        sponsors,
        tabContents,
        siteGeneral,
        panelists,
        locale,
        panels,
        workshops
    }
) => {
    return (
        <AppContext.Provider value={ siteGeneral }>
            <Head>
                <title>Web3 Developer Summit</title>
            </Head>
            <HeaderLegendary locale={ locale }/>
            <MainBannerEpic/>


            <MainLegendary>
                <>
                    <MainSliderLegendary/>
                    <WhitePaperEpic/>

                    <ScopeHeadersEpic
                        variant="mb-12"
                        head={ siteGeneral?.attributes.txt_kapsam }
                        sub={ siteGeneral?.attributes.txt_subheader_kapsam }
                    />
                    { tabContents?.length > 0 &&
						<div className="tab-group-outer">
							<Tabs
								defaultActiveKey={0}
								className="app-tabs"
							>
                                { tabContents.map(({ id, attributes }, index) => (
                                    <Tab
                                        eventKey={ index }
                                        key={ id }
                                        title={ attributes.title }
                                    >
                                        <div className="extent-cell-epic sm:flex sm:flex-row mb-5">
                                            <div className="basis-1/1 sm:basis-1/2 px-3 c-fff mb-5 rmark">
                                                <ReactMarkdown>
                                                    { attributes.left_content }
                                                </ReactMarkdown>
                                            </div>
                                            <div className="basis-1/1 sm:basis-1/2 px-3 c-fff mb-5 rmark">
                                                <ReactMarkdown>
                                                    { attributes.right_content }
                                                </ReactMarkdown>
                                            </div>
                                        </div>
                                    </Tab>
                                )) }
							</Tabs>
						</div>
                    }
                    <ExtentScopeLegendary mainContents={ mainContents }/>

                    <PanelistScopeLegendary panelists={ panelists }/>
                    <PanelsScopeLegendary panels={panels} />
                    <WorkshopScopeLegendary workshops={workshops} />
                    <JoinTeamScopeLegendary/>
                    {/*<SupportUsScopeLegendary/>*/ }
                    <TicketScopeLegendary/>
                    <ScopeHeadersEpic
                        variant="mb-12"
                        head={ siteGeneral?.attributes.txt_destekcilerimiz }
                    />
                    <OurSupportersScopeLegendary sponsors={ sponsors }/>

                    <ScopeHeadersEpic
                        variant="mb-12"
                        head={ siteGeneral?.attributes.txt_bize_destek_olun }
                    />

                    <div className="get-code-outer">

                        <div className="sm:flex sm:flex-row items-center">
                            <div className="basis-1/1 sm:basis-1/2 px-3 mb-5">
                                <Image src="/images/bitcoin-bottom.svg" alt="" width={ 96 } height={ 38 }/>
                                <div className="get-codes-cell"
                                     onClick={ () => copy(siteGeneral?.attributes.bitcoin_wallet_address) }>
                                    <span>{ siteGeneral?.attributes.bitcoin_wallet_address }</span>
                                    <Image src="/images/copy.svg" alt="" width={ 24 } height={ 24 }/>
                                </div>
                            </div>
                            <div className="basis-1/1 sm:basis-1/2 px-3 mb-5">
                                <Image src="/images/ethereum-bottom.svg" alt="" width={ 118 } height={ 38 }/>
                                <div className="get-codes-cell"
                                     onClick={ () => copy(siteGeneral?.attributes.ethereum_wallet_address) }>
                                    <span>{ siteGeneral?.attributes.ethereum_wallet_address }</span>
                                    <Image src="/images/copy.svg" alt="" width={ 24 } height={ 24 }/>
                                </div>
                            </div>
                        </div>
                        <div className="sm:flex sm:flex-row items-center">
                            <div className="basis-1/1 sm:basis-1/2 px-3 mb-5">
                                <Image src="/images/solana-bottom.svg" alt="" width={ 93 } height={ 38 }/>
                                <div className="get-codes-cell"
                                     onClick={ () => copy(siteGeneral?.attributes.solana_wallet_address) }>
                                    <span>{ siteGeneral?.attributes.solana_wallet_address }</span>
                                    <Image src="/images/copy.svg" alt="" width={ 24 } height={ 24 }/>
                                </div>
                            </div>
                            <div className="basis-1/1 sm:basis-1/2 px-3 mb-5">
                                <Image src="/images/avax-bottom.svg" alt="" width={ 76 } height={ 38 }/>
                                <div className="get-codes-cell"
                                     onClick={ () => copy(siteGeneral?.attributes.avalache_wallet_address) }>
                                    <span>{ siteGeneral?.attributes.avalache_wallet_address }</span>
                                    <Image src="/images/copy.svg" alt="" width={ 24 } height={ 24 }/>
                                </div>
                            </div>
                        </div>
                    </div>
                </>


            </MainLegendary>
            <FooterLegendary/>
        </AppContext.Provider>
    )
}


export const getServerSideProps: GetServerSideProps = async (context) => {
    const locale = context.locale ? (context.locale === "tr" ? "tr-TR" : "en") : "tr-TR";
    const mainContents = await fetches.getMainContents(locale)
    const sponsors = await fetches.getSponsors(locale)
    const tabContents = await fetches.getTabContents(locale)
    const siteGeneral = await fetches.getSiteGeneral(locale)
    const panelists = await fetches.getPanelistsData(locale)
    const panels = await fetches.getPanels(locale)
    const workshops = await fetches.getWorkshops(locale)

    return {
        props: {
            mainContents,
            sponsors,
            tabContents,
            siteGeneral,
            panelists,
            panels,
            workshops,
            locale: context.locale || "tr"
        }
    }
}

export default Home
