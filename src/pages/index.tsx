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
import ScopeHeadersEpic from "../components/epic/scope-headers.epic";
import {fetches} from "../api/fetches";
import {DataSponsors, DataTabContent, PanelistData, SiteGeneral, TopLevel} from "../api/models";
import {Tabs} from "flowbite-react"
import ReactMarkdown from "react-markdown";
import AppContext from "../context/site-context";
import Script from 'next/script'

import {useContext} from "react";
import Image from "next/image";

interface Props {
    mainContents: TopLevel[],
    sponsors: DataSponsors[],
    tabContents: DataTabContent[],
    siteGeneral: SiteGeneral,
    panelists: PanelistData[],
    locale: string
}

const Home: NextPage<Props> = (
    {
        mainContents,
        sponsors,
        tabContents,
        siteGeneral,
        panelists,
        locale
    }
) => {

    const copy = (value: string) => {
        navigator.clipboard.writeText(value);
    }

    return (
        <AppContext.Provider value={siteGeneral}>
            <HeaderLegendary locale={locale}/>
            <MainBannerEpic/>
            
            
            
            <MainLegendary>
                <>
                    <MainSliderLegendary/>
                    <WhitePaperEpic/>
                    
                     <ScopeHeadersEpic
                variant="mb-12"
                head={siteGeneral?.attributes.txt_kapsam}
                sub={siteGeneral?.attributes.txt_subheader_kapsam}
            />
                    
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
                                            <div className="basis-1/1 sm:basis-1/2 px-3 c-fff mb-5">
                                                <ReactMarkdown>
                                                    {attributes.left_content}
                                                </ReactMarkdown>
                                            </div>
                                            <div className="basis-1/1 sm:basis-1/2 px-3 c-fff mb-5">
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
                    {/*<SupportUsScopeLegendary/>*/}
                    <TicketScopeLegendary/>
                    <ScopeHeadersEpic
                        variant="mb-12"
                        head={siteGeneral?.attributes.txt_destekcilerimiz}
                    />
                    <OurSupportersScopeLegendary sponsors={sponsors}/>
                    
                    <div className="get-code-outer">
                        <h1>Bize Destek Olun</>
                        <div className="sm:flex sm:flex-row items-center">
                            <div className="basis-1/1 sm:basis-1/2 px-3 mb-5">
                                <Image src="/images/bitcoin-bottom.svg" alt="" width={96} height={38}/>
                                <div className="get-codes-cell" onClick={() => copy(siteGeneral?.attributes.bitcoin_wallet_address)}>
                                    <span>{siteGeneral?.attributes.bitcoin_wallet_address}</span>
                                    <Image src="/images/copy.svg" alt="" width={24} height={24} />
                                </div>
                            </div>
                            <div className="basis-1/1 sm:basis-1/2 px-3 mb-5">
                                <Image src="/images/ethereum-bottom.svg" alt="" width={118} height={38}/>
                                <div className="get-codes-cell" onClick={() => copy(siteGeneral?.attributes.ethereum_wallet_address)}>
                                    <span>{siteGeneral?.attributes.ethereum_wallet_address}</span>
                                    <Image src="/images/copy.svg" alt="" width={24} height={24} />
                                </div>
                            </div>
                        </div>
                        <div className="sm:flex sm:flex-row items-center">
                            <div className="basis-1/1 sm:basis-1/2 px-3 mb-5">
                                <Image src="/images/solana-bottom.svg" alt="" width={93} height={38}/>
                                <div className="get-codes-cell" onClick={() => copy(siteGeneral?.attributes.solana_wallet_address)}>
                                    <span>{siteGeneral?.attributes.solana_wallet_address}</span>
                                    <Image src="/images/copy.svg" alt="" width={24} height={24} />
                                </div>
                            </div>
                            <div className="basis-1/1 sm:basis-1/2 px-3 mb-5">
                                <Image src="/images/avax-bottom.svg" alt="" width={76} height={38}/>
                                <div className="get-codes-cell" onClick={() => copy(siteGeneral?.attributes.avalache_wallet_address)}>
                                    <span>{siteGeneral?.attributes.avalache_wallet_address}</span>
                                    <Image src="/images/copy.svg" alt="" width={24} height={24} />
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
    const locale = "tr-TR" // context.locale ? (context.locale === "tr" ? "tr-TR" : "en") : "tr-TR";
    const mainContents = await fetches.getMainContents(locale)
    const sponsors = await fetches.getSponsors(locale)
    const tabContents = await fetches.getTabContents(locale)
    const siteGeneral = await fetches.getSiteGeneral(locale)
    const panelists = await fetches.getPanelistsData(locale)

    return {
        props: {
            mainContents,
            sponsors,
            tabContents,
            siteGeneral,
            panelists,
            locale
        }
    }
}

export default Home
