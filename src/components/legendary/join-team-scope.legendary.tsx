import ScopeHeadersEpic from "../epic/scope-headers.epic";
import CardEpic from "../epic/card.epic";

const classNames = {
    root: 'grid grid-cols-1 md:grid-cols-2 gap-6 join-team-scope-legendary'
}

const text = "Aliquam at felis, velit aenean. Malesuada sit condimentum et, condimentum faucibus et. Eget a commodo rhoncus consectetur pulvinar. Tristique eget nunc sed massa tortor eget pellentesque. Pharetra, quam ut ut ultrices id placerat tellus bibendum. Eget a commodo rhoncus consectetur ."

const JoinTeamScopeLegendary = () => {
    return (
        <div className={ classNames.root }>
            <ScopeHeadersEpic
                head="Gönüllülük Ekibine Katıl"
                sub={ text }
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
                        {name: 'Referans Mektubu'},
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
                        {name: 'Sosyal medya sorumlusu'},
                        {name: 'Etkinlik alanı'},
                        {name: 'Ön event organizasyon (online-offline)'},
                        {name: 'İçerik oluşturma'}
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
                        {name: 'Online mülakat'},
                        {name: 'Görevlendirme'}
                    ]
                }}
            />
        </div>
    );
};

export default JoinTeamScopeLegendary;