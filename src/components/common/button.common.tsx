import { memo } from "react";

const classNames = {
    root: (variant: string = '') => `button-common ${ variant }`
}

const ButtonCommon = ({ children, variant, id }: Props) => {
    return (
        <button id={id} className={ classNames.root(variant) }>
            { children }
        </button>
    )
}

interface Props {
    children: string,
    variant?: string,
    id?: string
}

export default memo(ButtonCommon)
