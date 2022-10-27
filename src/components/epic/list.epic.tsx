import ListItemCommon from "../common/list-item.common";
import { memo } from "react";
import { RouterPaths_ } from "../../constants/router-paths";

interface Props {
    list: RouterPaths_[],
    variant?: string
}

const ListEpic = ({ list, variant }: Props) => {
    return (
        <ul className={ `list-epic flex items-center ${variant}` }>
            { list?.map((route, index) => (
                <ListItemCommon key={ `${ route.name }-${ index }` } href={ route.href }>
                    { route.name }
                </ListItemCommon>
            )) }
        </ul>
    )
}

export default memo(ListEpic)