import Image from "next/image";

interface Props {
    src: string;
    variant?: string
}

const ExtentCellImageCommon = ({ src, variant }: Props) => {
    return (
        <div className={ `extent-cell-image-common ${ variant }` }>
            <Image className="w-full" src={ src } alt="" width={ 1100 } height={ 900 }/>
        </div>
    )
}

export default ExtentCellImageCommon