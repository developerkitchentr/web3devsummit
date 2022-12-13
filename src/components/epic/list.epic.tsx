import ListItemCommon from "../common/list-item.common";
import { memo, useContext } from "react";
import AppContext from "../../context/site-context";

interface Props {
    variant?: string,
    menuOpened?: boolean,
    footer?: boolean,
    menuCloser?: () => void
}

const ListEpic = ({ variant = '', menuOpened, footer, menuCloser }: Props) => {
    const value = useContext(AppContext);
    return (
        <ul className={ `list-epic ${ variant } ${ menuOpened ? 'opened' : '' }` }>
            { value &&
				<>
                    { footer ?
                        <>
                            <ListItemCommon href="#supporters" onClick={menuCloser}>
                                { value?.attributes.txt_destekcilerimiz }
                            </ListItemCommon>
                            <ListItemCommon href="#ticket" onClick={menuCloser}>
                                { value?.attributes.txt_bilet }
                            </ListItemCommon>
                        </>
                        :
                        <>
                            {/*<ListItemCommon href="#extent" onClick={menuCloser}>
                                { value?.attributes.txt_kapsam }
                            </ListItemCommon>*/}
                            <ListItemCommon href="#panelist" onClick={menuCloser}>
                                { value?.attributes.txt_panelistler }
                            </ListItemCommon>
                            <ListItemCommon href="#supporters" onClick={menuCloser}>
                                { value?.attributes.txt_destekcilerimiz }
                            </ListItemCommon>
                            <ListItemCommon target={'_blank'} href={value?.attributes.link_whitepaper} onClick={menuCloser}>
                                Whitepaper
                            </ListItemCommon>
                            <ListItemCommon href="#ticket" onClick={menuCloser}>
                                { value?.attributes.txt_bilet }
                            </ListItemCommon>
                            {/*<ListItemCommon onClick={menuCloser} href="#volunteer">
                                { value?.attributes.txt_gonullu_ol }
                            </ListItemCommon>*/}
                            <ListItemCommon onClick={menuCloser} href="#content">
                                { value?.attributes.txt_menu_mekan }
                            </ListItemCommon>
                        </>
                    }

				</>
            }
        </ul>
    )
}

export default memo(ListEpic)
