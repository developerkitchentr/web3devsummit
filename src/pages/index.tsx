import type { NextPage } from 'next';
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

const Home: NextPage = () => {
    return (
        <>
            <HeaderLegendary/>
            <MainBannerEpic />
            <MainLegendary>
                <>
                    <MainSliderLegendary />
                    <WhitePaperEpic />
                    <ExtentScopeLegendary />
                    <PanelistScopeLegendary />
                    <JoinTeamScopeLegendary />
                    <SupportUsScopeLegendary />
                    <TicketScopeLegendary />
                    <OurSupportersScopeLegendary />
                </>
            </MainLegendary>
            <FooterLegendary />
        </>
    )
}

export default Home
