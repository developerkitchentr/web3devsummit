import Image from "next/image";
import {Volunteers} from "../../api/models";
import {getImageSrc, getImageUrl} from "../../helper";

interface Props {
    volunteers: Volunteers[]
}

const VolunteerScopeLegendary = ({volunteers}: Props) => {

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14 mt-10">
            {volunteers?.map(({attributes, id}) => (
                <div className="volunteer-cell" key={id}>
                    <Image src={getImageSrc(getImageUrl(attributes.photo))} alt="" width={310} height={310} />
                </div>
            ))}
        </div>
    );
};

export default VolunteerScopeLegendary;
