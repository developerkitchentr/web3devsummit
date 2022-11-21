import ListEpic from "../epic/list.epic";
import {ROUTER_PATHS} from "../../constants/router-paths";
import ButtonCommon from "../common/button.common";
import LogoIcon from "../common/icons/logo.icon";
import {useContext, useState} from "react";
import AppContext from "../../context/site-context";
import {Dropdown} from "flowbite-react"
import {useRouter} from "next/router";

const HeaderLegendary = ({locale}: Props) => {
    const [menuOpened, setMenuOpened] = useState<boolean>(false);
    const value = useContext(AppContext);
    const router = useRouter();

    const menuOpener = (bool: boolean): void => {
        setMenuOpened(bool)
    }

    const handleOnClickLang = (locale: string) => {
        router.push("/" + locale, "/" + locale, {
            locale,
            scroll: false
        })
    }

    return (
        <header className="header-legendary flex items-center">
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    <LogoIcon/>
                    <ListEpic menuOpened={menuOpened} variant="ml-auto header-nav"/>
                    <div className="flex items-center lang-button-outer">
                        {value &&
                            <Dropdown
                                label={locale}
                                dismissOnClick={false}
                            >
                                <Dropdown.Item onClick={() => handleOnClickLang("tr-TR")}>
                                    tr-TR
                                </Dropdown.Item>
                                <Dropdown.Item onClick={() => handleOnClickLang("en")}>
                                    en
                                </Dropdown.Item>
                            </Dropdown>
                        }
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

interface Props {
    locale: string
}

export default HeaderLegendary;
