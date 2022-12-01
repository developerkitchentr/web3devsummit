import React from 'react';
import Image from "next/image";
import { getImageSrc, getImageUrl } from "../../helper";
import { IMAGE } from "../../api/models";

const PanelsItemsCommon = ({ src, title, desc }: Props) => {
    return (
        <div className="panels-items-common">
            { src &&
				<div className="panels-items-img">
					<Image src={ getImageSrc(getImageUrl(src)) } alt="" width={ 52 } height={ 52 }/>
				</div>
            }
            <h6 className="text-xl c-fff font-bold">{ title }</h6>
            <p className="text-sm c-fff">{ desc }</p>
        </div>
    );
};

interface Props {
    src?: IMAGE,
    title: string,
    desc: string
}

export default PanelsItemsCommon;