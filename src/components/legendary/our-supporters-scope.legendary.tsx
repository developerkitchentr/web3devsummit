import ImageListEpic from "../epic/image-list.epic";

const classNames = {
    root: 'our-supporters-scope-legendary'
}

const OurSupportersScopeLegendary = () => {
    return (
        <div id="supporters" className={ classNames.root }>
            <ImageListEpic
                head="Platin  Destekçilerimiz"
                image_list={ [
                    { url: '/images/icons/aa.png' },
                    { url: '/images/icons/aa.png' },
                    { url: '/images/icons/aa.png' }
                ] }
            />
            <ImageListEpic
                head="Gold"
                image_list={ [
                    { url: '/images/brand/crypto-female-logo.png' },
                    { url: '/images/brand/okx-logo.png' }
                ] }
            />
            <ImageListEpic
                head="Medya"
                image_list={ [
                    { url: '/images/brand/wannart-logo.png' },
                    { url: '/images/brand/btc-haber-logo.png' }
                ] }
            />
            <ImageListEpic
                head="Mekan"
                image_list={ [
                    { url: '/images/brand/nisantasi-logo.png' }
                ] }
            />
            <ImageListEpic
                head="Üniversite Kulüpleri"
                image_list={ [
                    { url: '/images/brand/company-text-logo.png' },
                    { url: '/images/brand/company-logo.png' },
                    { url: '/images/brand/a-company-logo.png' },
                    { url: '/images/brand/company-your-logo.png' }
                ] }
            />
            <ImageListEpic
                head="İçerik Desteği Sunanlar"
                image_list={ [
                    { url: '/images/brand/btc-magazin-logo.png' },
                    { url: '/images/brand/coinotag-logo.png' },
                    { url: '/images/brand/kriptokoin-logo.png' }
                ] }
            />
            <ImageListEpic
                head="Yeme-İçme"
                image_list={ [
                    { url: '/images/brand/siparisim-logo.png' },
                    { url: '/images/brand/papa-johns-logo.png' }
                ] }
            />
            <ImageListEpic
                head="Organizatör"
                image_list={ [
                    { url: '/images/brand/devkit-logo.png' },
                    { url: '/images/brand/bosporus-inspiration-logo.png' },
                    { url: '/images/brand/devmultigroup-logo.png' }
                ] }
            />
        </div>
    );
};

export default OurSupportersScopeLegendary;