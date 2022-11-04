import ScopeHeadersEpic from "../epic/scope-headers.epic";
import CardEpic from "../epic/card.epic";

const classNames = {
    root: 'grid grid-cols-1 md:grid-cols-2 gap-6 join-team-scope-legendary'
}


const JoinTeamScopeLegendary = () => {
    return (
        <div className={ classNames.root }>
            <ScopeHeadersEpic
                head="Gönüllü Ekibe Katıl"
                sub="Web3 geliştirici ekosistemini bir araya getirecek bu etkinlikte sen de gönüllü ol, online ve offline bir çok etkinlikte görev alma şansını yakala"
                variant="secondary"
                button_text="Hemen Başvur"
            />
            <CardEpic
                variant="primary"
                image="/images/join-team-01.jpg"
                content={{
                    number: '01',
                    name: 'Neden',
                    list: [
                        {name: 'Network'},
                        {name: 'Katılım sertifikası'},
                        {name: 'Etkinlik Deneyimi'},
                        {name: 'After Party'}
                    ]
                }}
            />
            <CardEpic
                variant="primary"
                image="/images/join-team-02.jpg"
                content={{
                    number: '02',
                    name: 'Görevler',
                    list: [
                        {name: 'Etkinlik alanı görevleri'},
                        {name: 'Sosyal Medya Yönetimi'},
                        {name: 'Online Röportajlar'},
                        {name: 'İçerik Sorumlusu'}
                    ]
                }}
            />
            <CardEpic
                variant="primary"
                image="/images/join-team-03.jpg"
                content={{
                    number: '03',
                    name: 'Süreç',
                    list: [
                        {name: 'Başvuru'},
                        {name: 'Değerlendirme'},
                        {name: 'Mülakat'},
                        {name: 'Görevlendirme'}
                    ]
                }}
            />
        </div>
    );
};

export default JoinTeamScopeLegendary;