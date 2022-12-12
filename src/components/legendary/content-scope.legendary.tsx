import ScopeHeadersEpic from "../epic/scope-headers.epic";
import {SiteGeneral} from "../../api/models";
import {getImageSrc, getImageUrl} from "../../helper";
import Image from "next/image";
import ButtonCommon from "../common/button.common";
import Link from "next/link";

interface Props {
    siteGeneral: SiteGeneral
}

const ContentScopeLegendary = ({siteGeneral}: Props) => {
    console.log(siteGeneral)
    return (
        <div id="content" className="pt-5">
            <ScopeHeadersEpic
                variant="mb-12"
                head={siteGeneral?.attributes.venue_header}
                sub={siteGeneral?.attributes.venue_subheader}
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                <div className="content-scope-cell">
                    {siteGeneral?.attributes.venue_description}
                </div>
                {siteGeneral?.attributes.venue_images?.data?.length > 0 && (
                    <div className="content-scope-image-cell">
                        <Image
                            className="w-full"
                            src={getImageSrc(siteGeneral?.attributes.venue_images?.data[0].attributes?.url)}
                            alt=""
                            width={1100}
                            height={900}
                        />
                    </div>
                )}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {siteGeneral?.attributes.venue_images?.data?.map((image, index) => {
                    if (index === 0) return null
                    return (
                        <div key={image.id}>
                            <div className="content-scope-image-cell">
                                <Image
                                    className="w-full"
                                    src={getImageSrc(image?.attributes?.url)}
                                    alt=""
                                    width={1100}
                                    height={900}
                                />
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="flex items-center mb-14">
                <Image src="/images/icons/location.svg" alt="" width={20} height={20}/>
                <span className="c-fff mx-2">{siteGeneral?.attributes.venue_address}</span>
                <Link href={`https://www.google.com/maps/?q=${siteGeneral?.attributes.venue_coordinate}`} target="_blank">
                    <div className="txt-directions">
                        <Image src="/images/icons/arrow.svg" alt="" width={24} height={24}/>
                        <span className="ml-3 c-fff">{siteGeneral?.attributes.txt_directions}</span>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default ContentScopeLegendary;
