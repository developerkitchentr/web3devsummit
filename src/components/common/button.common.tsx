import { memo } from "react";

interface Props {
    children: string,
    variant?: string
}

const ButtonCommon = ({ children, variant }: Props) => {
    return (
        <button className={`button-common ${variant}`}>
            { children }
        </button>
    )
}

export default memo(ButtonCommon)