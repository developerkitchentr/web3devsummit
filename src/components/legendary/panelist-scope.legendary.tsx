import ScopeHeadersEpic from "../epic/scope-headers.epic";
import CardEpic from "../epic/card.epic";
import {useContext} from "react";
import AppContext from "../../context/site-context";
import {PanelistData} from "../../api/models";
import {getImageSrc, getImageUrl} from "../../helper";

const classNames = {
    panelistRoot: "panelist-scope-legendary",
    panelistGrid: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
}

const PanelistScopeLegendary = ({panelists}: Props) => {
    const value = useContext(AppContext);
    return (
        <div id="panelist" className={ classNames.panelistRoot }>
            <ScopeHeadersEpic
                variant="mb-12"
                head={value?.attributes.txt_panelistler}
                sub={value?.attributes.txt_subheader_panelistler}
            />
            <div className={ classNames.panelistGrid }>
                { panelists?.map(({id, attributes }) => (
                    <CardEpic
                        key={ id }
                        image={ getImageSrc(getImageUrl(attributes.photo)) }
                        variant="scale-down"
                        content={ {
                            name: attributes.name_surname,
                            desc: attributes.job_title,
                            twitter_link: attributes.twitter,
                            linkedin_link: attributes.linkedin,
                        } }
                    />
                )) }
            </div>
        </div>
    )
}

interface Props {
    panelists: PanelistData[]
}

export default PanelistScopeLegendary
