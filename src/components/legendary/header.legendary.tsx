import ListEpic from "../epic/list.epic";
import { ROUTER_PATHS } from "../../constants/router-paths";
import ButtonCommon from "../common/button.common";
import LogoIcon from "../common/icons/logo.icon";
import {useState} from "react";

const HeaderLegendary = () => {
    const [menuOpened, setMenuOpened] = useState<boolean>(false);

    const menuOpener = (bool: boolean): void => {
        setMenuOpened(bool)
    }

    return (
        <header className="header-legendary flex items-center">
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    <LogoIcon />
                    <ListEpic menuOpened={menuOpened} list={ROUTER_PATHS} variant="ml-auto header-nav" />
                    <div className="flex items-center">
                        <ButtonCommon variant="primary ml-2">
                            Sponsor Ol
                        </ButtonCommon>
                        <div
                            onClick={() => menuOpener(!menuOpened)}
                            className={`menu-opener ml-3 ${menuOpened ? 'change' : ''}`}
                        >
                            <div className="bar1"></div>
                            <div className="bar2"></div>
                            <div className="bar3"></div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default HeaderLegendary;