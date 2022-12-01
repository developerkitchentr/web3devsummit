import React from 'react';
import { IMAGE } from "../../api/models";
import Image from "next/image";
import { getImageSrc, getImageUrl } from "../../helper";

const WorkshopItemsCommon = ({ src, title, desc }: Props) => {
    return (
        <div className="workshop-items-common">
            { src &&
		        <div className="workshop-items-img">
			        <Image src={ getImageSrc(getImageUrl(src)) } alt="" width={ 52 } height={ 52 }/>
		        </div>
            }
            <h6 className="text-2xl c-fff font-bold">{ title }</h6>
            <p className="text-xl c-fff">{ desc }</p>
        </div>
    );
};

interface Props {
    src?: IMAGE,
    title: string,
    desc: string
}

export default WorkshopItemsCommon;