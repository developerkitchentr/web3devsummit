import Link from "next/link";
import { memo } from "react";

interface Props {
    href?: string;
    children: string;
    onClick?: () => void;
    target?: string
}

const ListItemCommon = (
    {
        href,
        children,
        onClick,
        target
    }: Props
) => {
    return (
        <li className="list-item-common" onClick={onClick}>
            { href ? <Link href={ href } target={target}>{ children }</Link> : children }
        </li>
    )
}

export default memo(ListItemCommon)
