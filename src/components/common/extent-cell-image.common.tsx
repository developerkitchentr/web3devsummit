import Image from "next/image";
import {getImageSrc} from "../../helper";

interface Props {
    src: string;
    variant?: string
}

const ExtentCellImageCommon = ({ src, variant }: Props) => {
    return (
        <div className={ `extent-cell-image-common ${ variant }` }>
            <Image className="w-full" src={ getImageSrc(src) } alt="" width={ 1100 } height={ 900 }/>
        </div>
    )
}

export default ExtentCellImageCommon