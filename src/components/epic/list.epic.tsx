import ListItemCommon from "../common/list-item.common";
import {memo, useContext} from "react";
import {RouterPaths_} from "../../constants/router-paths";
import AppContext from "../../context/site-context";

interface Props {
    variant?: string,
    menuOpened?: boolean
}

const ListEpic = ({variant = '', menuOpened}: Props) => {
    const value = useContext(AppContext);
    return (
        <ul className={`list-epic ${variant} ${menuOpened ? 'opened' : ''}`}>
            {value &&
                <>
                    <ListItemCommon href="#extent">
                        {value?.attributes.txt_kapsam}
                    </ListItemCommon>
                    <ListItemCommon href="#panelist">
                        {value?.attributes.txt_panelistler}
                    </ListItemCommon>
                    <ListItemCommon href="#supporters">
                        {value?.attributes.txt_destekcilerimiz}
                    </ListItemCommon>
                    <ListItemCommon href="#ticket">
                        {value?.attributes.txt_bilet}
                    </ListItemCommon>
                </>
            }
        </ul>
    )
}

export default memo(ListEpic)