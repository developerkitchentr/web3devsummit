import LogoIcon from "../common/icons/logo.icon";
import { ROUTER_PATHS } from "../../constants/router-paths";
import ListEpic from "../epic/list.epic";

const classNames = {
    root: 'footer-legendary',
    info: 'color-white font-bold',
    container: "container mx-auto flex items-center justify-between h-full"
}

const FooterLegendary = () => {
    return (
        <div className={ classNames.root }>
            <div className={ classNames.container }>
                <LogoIcon/>
                <ListEpic list={ ROUTER_PATHS } variant="mx-auto footer-list-epic"/>
                <h2 className={ classNames.info }>© 2022 web3devsummit</h2>
            </div>
        </div>
    );
};

export default FooterLegendary;