import type { NextPage } from 'next';
import HeaderLegendary from "../components/legendary/header.legendary";
import MainLegendary from "../components/legendary/main.legendary";
import MainBannerEpic from "../components/epic/main-banner.epic";
import WhitePaperEpic from "../components/epic/white-paper.epic";
import ExtentScopeLegendary from "../components/legendary/extent-scope.legendary";
import MainSliderLegendary from "../components/legendary/main-slider.legendary";
import PanelistScopeLegendary from "../components/legendary/panelist-scope.legendary";

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
                </>
            </MainLegendary>
        </>
    )
}

export default Home
