import Image from "next/image";

interface Props {
    src: string;
    variant?: string;
}

const ExtentListIconCommon = ({ src, variant }: Props) => {
    return (
        <Image className={ variant } src={ src } alt="" width={ 48 } height={ 48 }/>
    )
}

export default ExtentListIconCommon


