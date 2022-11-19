import ScopeHeadersEpic from "../epic/scope-headers.epic";
import Image from "next/image";
import {useContext} from "react";
import AppContext from "../../context/site-context";

const classNames = {
    root: 'ticket-scope-legendary grid grid-cols-1 sm:grid-cols-2 gap-6'
}

const TicketScopeLegendary = () => {
    const value = useContext(AppContext);
    return (
        <div id="ticket" className={ classNames.root }>
            <ScopeHeadersEpic
                head={value?.attributes.txt_header_bilet}
                sub={value?.attributes.txt_subheader_biler}
                variant="secondary"
                button_text={value?.attributes.link_bilet_al}
                button_link={value?.attributes.link_destekcimiz_ol}
            />
            <Image className="w-100 d-block" src="/images/summit.png" alt="" width={650} height={300} />
        </div>
    );
};

export default TicketScopeLegendary;