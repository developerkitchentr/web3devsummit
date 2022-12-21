import Image from "next/image";
import {Volunteers} from "../../api/models";
import {getImageSrc, getImageUrl} from "../../helper";
import {sortByNameVolunteerData} from "../../utils/helpers";
import Link from "next/link";
import TwitterIcon from "../common/icons/twitter.icon";
import LinkedinIcon from "../common/icons/linkedin.icon";
import {useContext} from "react";
import AppContext from "../../context/site-context";
import ScopeHeadersEpic from "../epic/scope-headers.epic";

interface Props {
    volunteers: Volunteers[]
}

const VolunteerScopeLegendary = ({volunteers}: Props) => {
    const value = useContext(AppContext);
    return (
        <>
            <ScopeHeadersEpic
                variant="mb-12"
                head={ value?.attributes.txt_volunteer_header }
                sub={ '' }
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14 mt-10">
                {volunteers?.sort(sortByNameVolunteerData).map(({attributes, id}) => (
                    <div className="volunteer-cell" key={id}>
                        <div className="volunteer-cell-content">
                            <div className="text-center">
                                <h2 className="text-lg">
                                    {attributes.name_surname}
                                </h2>
                                <h2 className="text-base my-3">
                                    {attributes.job_title}
                                </h2>
                                <div className="flex items-center justify-center" style={ { minHeight: 24 } }>
                                    { attributes.twitter &&
                                        <Link target="_blank" href={ attributes.twitter } className="mr-3">
                                            <TwitterIcon/>
                                        </Link>
                                    }
                                    { attributes.linkedin &&
                                        <Link target="_blank" href={ attributes.linkedin }>
                                            <LinkedinIcon/>
                                        </Link>
                                    }
                                </div>
                            </div>
                        </div>
                        <Image src={getImageSrc(getImageUrl(attributes.photo))} alt="" width={310} height={310}/>
                    </div>
                ))}
            </div>
        </>
    );
};

export default VolunteerScopeLegendary;
