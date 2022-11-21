import Image from "next/image";
import {getImageSrc} from "../../helper";

interface Props {
    src: string;
    variant?: string;
}

const ExtentListIconCommon = ({ src, variant }: Props) => {
    return (
        <Image className={ variant } src={ getImageSrc(src) } alt="" width={ 48 } height={ 48 }/>
    )
}

export default ExtentListIconCommon


