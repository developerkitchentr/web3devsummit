import ScopeHeadersEpic from "../epic/scope-headers.epic";
import CardEpic from "../epic/card.epic";
import {useContext} from "react";
import AppContext from "../../context/site-context";

const classNames = {
    root: 'grid grid-cols-1 md:grid-cols-2 gap-6 join-team-scope-legendary'
}


const JoinTeamScopeLegendary = () => {
    const value = useContext(AppContext);
    return (
        <div className={ classNames.root }>
            <ScopeHeadersEpic
                head={value?.attributes.txt_header_gonullu_ekibe_katil}
                sub={value?.attributes.txt_subheader_gonullu_ekibe_katil}
                variant="secondary"
                button_text={value?.attributes.txt_btn_gonullu_basvur}
            />
            <CardEpic
                variant="primary"
                image="/images/join-team-01.jpg"
                content={{
                    name: value?.attributes.txt_header_gonullu_neden,
                    list: value?.attributes.txt_gonullu_neden_icerik
                }}
            />
            <CardEpic
                variant="primary"
                image="/images/join-team-02.jpg"
                content={{
                    name: value?.attributes.txt_header_gonullu_gorevler,
                    list: value?.attributes.txt_gonullu_gorevler_icerik
                }}
            />
            <CardEpic
                variant="primary"
                image="/images/join-team-03.jpg"
                content={{
                    name: value?.attributes.txt_header_gonullu_surec,
                    list: value?.attributes.txt_gonullu_surec_icerik
                }}
            />
        </div>
    );
};

export default JoinTeamScopeLegendary;