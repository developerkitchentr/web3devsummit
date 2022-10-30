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
                    Siz de Web3 geliştirici ve yaratıcı ekosistemi destekleyerek adınızı blockchain ekosisteminde
                    duyurmak ister misiniz? Destek dosyamızı talep ederek bizimle iletişime geçebilirsiniz
                </p>
            </div>
            <ButtonCommon variant="tertiary min-w">
                Formu doldur
            </ButtonCommon>
        </div>
    );
};

export default SupportUsScopeLegendary;