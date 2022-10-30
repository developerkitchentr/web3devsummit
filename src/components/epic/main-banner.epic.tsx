import Image from "next/image";
import MatrixRainEpic from "./matrix-rain.epic";

const MainBannerEpic = () => {
    return (
        <div className="main-banner-epic">
            <MatrixRainEpic />
            <div className="middle-image">
                <Image
                    src="/images/banner-logo.svg"
                    alt=""
                    width={ 593 }
                    height={ 223 }
                    className="w-full"
                />
            </div>
            <div className="bottom-image">
                <Image
                    src="/images/banner-illustrator-city.svg"
                    alt=""
                    width={ 1545 }
                    height={ 359 }
                    className="w-full"
                />
            </div>
        </div>
    )
}

export default MainBannerEpic