import Image from "next/image";

interface Props {
    children: string;
}

const ExtentListItemCommon = ({ children }: Props) => {
    return (
        <li className="extent-list-item-common text-lg">
            <Image
                src="/images/check-with-colorize.svg"
                alt=""
                width={ 28 }
                height={ 28 }
            />
            <span>{ children }</span>
        </li>
    )
}

export default ExtentListItemCommon