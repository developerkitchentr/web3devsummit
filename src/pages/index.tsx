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
import {TopLevel} from "../api/models";

interface Props {
    mainContents: TopLevel[]
}

const Home: NextPage<Props> = (
    {
        mainContents
    }
) => {
    return (
        <>
            <HeaderLegendary/>
            <MainBannerEpic/>
            <MainLegendary>
                <>
                    <MainSliderLegendary/>
                    <WhitePaperEpic/>
                    <ExtentScopeLegendary mainContents={mainContents}/>
                    <PanelistScopeLegendary/>
                    <JoinTeamScopeLegendary/>
                    <SupportUsScopeLegendary/>
                    <TicketScopeLegendary/>
                    <OurSupportersScopeLegendary/>
                </>
            </MainLegendary>
            <FooterLegendary/>
        </>
    )
}


export const getServerSideProps: GetServerSideProps = async (context) => {
    // ...
    const mainContents = await fetches.getMainContents()

    return {
        props: {
            mainContents
        }
    }
}

export default Home
