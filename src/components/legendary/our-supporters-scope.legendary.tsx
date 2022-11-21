import ImageListEpic from "../epic/image-list.epic";
import {DataSponsors} from "../../api/models";
import {getImageSrc} from "../../helper";

const classNames = {
    root: 'our-supporters-scope-legendary'
}

interface Props {
    sponsors: DataSponsors[]
}

const OurSupportersScopeLegendary = ({sponsors}: Props) => {
    return (
        <div id="supporters" className={classNames.root}>
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
