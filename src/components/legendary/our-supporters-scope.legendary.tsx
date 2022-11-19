import ImageListEpic from "../epic/image-list.epic";
import {DataSponsors} from "../../api/models";
import {getImageSrc} from "../../helper";
import {useContext} from "react";
import AppContext from "../../context/site-context";
import ScopeHeadersEpic from "../epic/scope-headers.epic";

const classNames = {
    root: 'our-supporters-scope-legendary'
}

interface Props {
    sponsors: DataSponsors[]
}

const OurSupportersScopeLegendary = ({sponsors}: Props) => {
    const value = useContext(AppContext);
    return (
        <div id="supporters" className={classNames.root}>
            <ScopeHeadersEpic
                variant="mb-12"
                head={value?.attributes.txt_destekcilerimiz}
            />
            {sponsors?.map(({id, attributes}) => (
                <ImageListEpic
                    key={id}
                    head={attributes.title}
                    image_list={attributes.sponsors?.map(s => ({
                        url: getImageSrc(s.logo.data.attributes.url)
                    }))}
                />
            ))}
        </div>
    );
};

export default OurSupportersScopeLegendary;