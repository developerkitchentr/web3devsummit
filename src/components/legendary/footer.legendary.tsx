import LogoIcon from "../common/icons/logo.icon";
import ListEpic from "../epic/list.epic";
import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import AppContext from "../../context/site-context";

const classNames = {
    root: 'footer-legendary',
    info: 'color-white font-bold flex items-center',
    container: "container mx-auto flex items-center justify-between h-full"
}

const FooterLegendary = () => {
    const value = useContext(AppContext);
    return (
        <div className={ classNames.root }>
            <div className={ classNames.container }>
                <LogoIcon/>
                <ListEpic variant="mx-auto footer-list-epic"/>
                <h2 className={ classNames.info }>
                    <div className="flex items-center justify-center">
                        <Link href={value?.attributes.linkedin || '/'} target="_blank">
                            <Image className="mr-5" src="/images/icons/LinkedIn.svg" alt="" width={32} height={32} />
                        </Link>
                        <Link href={value?.attributes.twitter || '/'} target="_blank">
                            <Image className="mr-5" src="/images/icons/Twitter.svg" alt="" width={32} height={32} />
                        </Link>
                    </div>
                    <span>© 2022 web3devsummit</span>
                </h2>
            </div>
        </div>
    );
};

export default FooterLegendary;
