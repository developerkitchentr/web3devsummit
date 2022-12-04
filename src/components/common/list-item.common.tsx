import Link from "next/link";
import { memo } from "react";

interface Props {
    href?: string;
    children: string;
    onClick?: () => void
}

const ListItemCommon = (
    {
        href,
        children,
        onClick
    }: Props
) => {
    return (
        <li className="list-item-common" onClick={onClick}>
            { href ? <Link href={ href }>{ children }</Link> : children }
        </li>
    )
}

export default memo(ListItemCommon)
