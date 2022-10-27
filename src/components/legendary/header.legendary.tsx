import Image from "next/image";
import ListEpic from "../epic/list.epic";
import { ROUTER_PATHS } from "../../constants/router-paths";
import ButtonCommon from "../common/button.common";

const HeaderLegendary = () => {
    return (
        <header className="header-legendary flex items-center">
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    <Image src="/images/web3devsummit.svg" alt="" width={270} height={25} />
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