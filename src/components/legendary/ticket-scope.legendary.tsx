import ScopeHeadersEpic from "../epic/scope-headers.epic";
import Image from "next/image";

const classNames = {
    root: 'ticket-scope-legendary grid grid-cols-1 sm:grid-cols-2 gap-6'
}

const TicketScopeLegendary = () => {
    return (
        <div id="ticket" className={ classNames.root }>
            <ScopeHeadersEpic
                head="Web3 Developer Summit ‘22 Biletleri"
                sub="Sınırlı kontenjanla yapılacak etkinlik için biletlerinizi şimdiden oluşturabilirsiniz."
                variant="secondary"
                button_text="Biletini Ayırt"
            />
            <Image className="w-100 d-block" src="/images/summit.png" alt="" width={650} height={300} />
        </div>
    );
};

export default TicketScopeLegendary;