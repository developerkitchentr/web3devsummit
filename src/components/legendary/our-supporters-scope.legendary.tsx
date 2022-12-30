import ImageListEpic from "../epic/image-list.epic";
import {DataSponsors} from "../../api/models";
import {getImageSrc} from "../../helper";
import { sortByListOrder } from "../../utils/helpers";

const classNames = {
    root: 'our-supporters-scope-legendary'
}

interface Props {
    sponsors: DataSponsors[]
}

const OurSupportersScopeLegendary = ({sponsors}: Props) => {
    return (
        <div id="supporters" className={classNames.root}>
            {sponsors?.sort(sortByListOrder).map(({id, attributes}) => (
                <ImageListEpic
                    key={id}
                    head={attributes.title}
                    image_list={attributes.sponsors?.map(s => ({
                        image_url: getImageSrc(s.logo.data.attributes.url),
                        link: s.url
                    }))}
                />
            ))}
        </div>
    );
};

export default OurSupportersScopeLegendary;
