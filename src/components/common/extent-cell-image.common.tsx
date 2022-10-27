import Image from "next/image";

interface Props {
    src: string;
    variant: string
}

const ExtentCellImageCommon = ({ src, variant }: Props) => {
    return (
        <div className={ `extent-cell-image-common ${ variant }` }>
            <Image className="w-full" src={ src } alt="" width={ 560 } height={ 400 }/>
        </div>
    )
}

export default ExtentCellImageCommon