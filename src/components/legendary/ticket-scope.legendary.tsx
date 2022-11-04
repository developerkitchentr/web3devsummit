import ScopeHeadersEpic from "../epic/scope-headers.epic";
import ExtentCellImageCommon from "../common/extent-cell-image.common";
import Image from "next/image";

const classNames = {
    root: 'ticket-scope-legendary grid grid-cols-1 sm:grid-cols-2 gap-6'
}

const text = "Aliquam at felis, velit aenean. Malesuada sit condimentum et, condimentum faucibus et. Eget a commodo rhoncus consectetur pulvinar. Tristique eget nunc sed massa tortor eget pellentesque. Pharetra, quam ut ut ultrices id placerat tellus bibendum."

const TicketScopeLegendary = () => {
    return (
        <div id="ticket" className={ classNames.root }>
            <ScopeHeadersEpic
                head="Web3 Developer Summit ‘22 Biletleri"
                sub={ text }
                variant="secondary"
                button_text="Biletini Ayırt"
            />
            <Image className="w-100 d-block" src="/images/summit.png" alt="" width={650} height={300} />
        </div>
    );
};

export default TicketScopeLegendary;