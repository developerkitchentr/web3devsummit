import Link from "next/link";
import { memo } from "react";

interface Props {
    href?: string;
    children: string;
}

const ListItemCommon = (
    {
        href,
        children
    }: Props
) => {
    return (
        <li className="list-item-common">
            { href ? <Link href={ href }>{ children }</Link> : children }
        </li>
    )
}

export default memo(ListItemCommon)