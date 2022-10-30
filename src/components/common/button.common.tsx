import { memo } from "react";

const classNames = {
    root: (variant: string = '') => `button-common ${ variant }`
}

const ButtonCommon = ({ children, variant }: Props) => {
    return (
        <button className={ classNames.root(variant) }>
            { children }
        </button>
    )
}

interface Props {
    children: string,
    variant?: string
}

export default memo(ButtonCommon)