import ButtonCommon from "../common/button.common";
import Image from "next/image";

const classNames = {
    root: 'support-us-scope-legendary flex items-center justify-between',
    content: 'support-us-content',
    head: 'color-white text-4xl mb-3',
    desc: 'color-white text-lg',
    image: 'support-us-image'
}

const SupportUsScopeLegendary = () => {
    return (
        <div id="volunteer" className={ classNames.root }>
            <Image
                className={ classNames.image }
                src="/images/cta-section-border.svg"
                alt=""
                width={ 1095 }
                height={ 240 }/>
            <div className={ classNames.content }>
                <h2 className={ classNames.head }>Bizi Destekleyin</h2>
                <p className={ classNames.desc }>
                    Geleceği inşa etme vizyonuna sahip ekipleri bir araya getiren organizasyonumuzu destekleyerek
                    adınızı blockchain ekosistemindeki bu nitelikli ve niş kitleye duyurup, teknoloji severlere
                    ulaşabilirsiniz.
                </p>
            </div>
            <ButtonCommon variant="tertiary min-w">
                Formu doldur
            </ButtonCommon>
        </div>
    );
};

export default SupportUsScopeLegendary;