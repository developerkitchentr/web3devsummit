import PaperCommon from "../common/paper.common";
import ButtonCommon from "../common/button.common";
import {useContext} from "react";
import AppContext from "../../context/site-context";
import Link from "next/link";

const WhitePaperEpic = () => {
    const value = useContext(AppContext);

    return (
        <PaperCommon variant="mb-10 primary">
            <div className="flex justify-between">
                <div>
                    <h2 className="text-4xl color-white">{value?.attributes.txt_header_event_whitepaper}</h2>
                    <p className="text-xl color-white">{value?.attributes.txt_subheader_event_whitepaper}</p>
                </div>
                <div className="flex items-center flex-wrap-wrap">
                    {value &&
                        <>
                            <Link href={value?.attributes.link_whitepaper} passHref legacyBehavior>
                                <a target="_blank">
                                    <ButtonCommon variant="secondary mr-2">
                                        Event Whitepaper
                                    </ButtonCommon>
                                </a>
                            </Link>
                            <Link href={value?.attributes.link_whitepaper} passHref legacyBehavior>
                                <a target="_blank">
                                    <ButtonCommon variant="secondary">
                                        One Pager
                                    </ButtonCommon>
                                </a>
                            </Link>
                        </>
                    }
                </div>
            </div>
        </PaperCommon>
    )
}

export default WhitePaperEpic