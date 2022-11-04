import ImageListEpic from "../epic/image-list.epic";

const classNames = {
    root: 'our-supporters-scope-legendary'
}

const OurSupportersScopeLegendary = () => {
    return (
        <div id="supporters" className={ classNames.root }>
            <ImageListEpic
                head="Platin"
                image_list={ [
                    { url: '/images/icons/aa.png' },
                    { url: '/images/icons/aa.png' },
                    { url: '/images/icons/aa.png' }
                ] }
            />
            <ImageListEpic
                head="Gold"
                image_list={ [
                    { url: '/images/icons/aa.png' },
                    { url: '/images/icons/aa.png' },
                    { url: '/images/icons/aa.png' },
                    { url: '/images/icons/aa.png' }
                ] }
            />
            <ImageListEpic
                head="Medya"
                image_list={ [
                    { url: '/images/brand/crypto-female-logo.png' },
                    { url: '/images/brand/btc-haber-logo.png' },
                    { url: '/images/brand/coinotag-logo.png' },
                    { url: '/images/brand/merkeziyetsiz-gelecek.svg' },
                    { url: '/images/brand/bein-crypto.png' },
                    { url: '/images/brand/nft-horizon.png' }
                ] }
            />
            <ImageListEpic
                head="İçerik Destekçimiz"
                image_list={ [
                    { url: '/images/brand/patika.png' }
                ] }
            />
            <ImageListEpic
                head="Organizatör"
                image_list={ [
                    { url: '/images/brand/devkit-logo.png' },
                    { url: '/images/brand/devmultigroup-logo.png' }
                ] }
            />
        </div>
    );
};

export default OurSupportersScopeLegendary;