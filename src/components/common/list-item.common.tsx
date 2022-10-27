import Link from "next/link";
import { memo } from "react";

interface Props {
    href: string;
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
            <Link href={ href }>{ children }</Link>
        </li>
    )
}

export default memo(ListItemCommon)