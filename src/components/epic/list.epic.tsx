import ListItemCommon from "../common/list-item.common";
import { memo } from "react";
import { RouterPaths_ } from "../../constants/router-paths";

interface Props {
    list: RouterPaths_[],
    variant?: string,
    menuOpened?: boolean
}

const ListEpic = ({ list, variant = '', menuOpened }: Props) => {
    return (
        <ul className={ `list-epic ${ variant } ${menuOpened ? 'opened' : ''}` }>
            { list.map((route, index) => (
                <ListItemCommon key={ `${ route.name }-${ index }` } href={ route.href }>
                    { route.name }
                </ListItemCommon>
            )) }
        </ul>
    )
}

export default memo(ListEpic)