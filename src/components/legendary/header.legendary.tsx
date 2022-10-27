import ListEpic from "../epic/list.epic";
import { ROUTER_PATHS } from "../../constants/router-paths";
import ButtonCommon from "../common/button.common";
import LogoIcon from "../common/icons/logo.icon";

const HeaderLegendary = () => {
    return (
        <header className="header-legendary flex items-center">
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    <LogoIcon />
                    <ListEpic list={ROUTER_PATHS} variant="ml-auto" />
                    <ButtonCommon variant="primary ml-2">
                        Sponsor Ol
                    </ButtonCommon>
                </div>
            </div>
        </header>
    )
}

export default HeaderLegendary;