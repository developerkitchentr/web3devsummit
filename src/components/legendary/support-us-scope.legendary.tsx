import ButtonCommon from "../common/button.common";
import Image from "next/image";
import {useContext} from "react";
import AppContext from "../../context/site-context";

const classNames = {
    root: 'support-us-scope-legendary flex items-center justify-between',
    content: 'support-us-content',
    head: 'color-white text-4xl mb-3',
    desc: 'color-white text-lg',
    image: 'support-us-image'
}

const SupportUsScopeLegendary = () => {
    const value = useContext(AppContext);

    return (
        <div id="volunteer" className={classNames.root}>
            <Image
                className={classNames.image}
                src="/images/cta-section-border.svg"
                alt=""
                width={1095}
                height={240}/>
            <div className={classNames.content}>
                {value &&
                    <>
                        <h2 className={classNames.head}>{value?.attributes.txt_header_bizi_destekleyin}</h2>
                        <p className={classNames.desc}>
                            {value?.attributes.txt_bizi_destekleyin_icerik}
                        </p>
                    </>
                }
            </div>
            {value &&
                <ButtonCommon variant="tertiary min-w">
                    {value?.attributes.txt_btn_formu_doldur}
                </ButtonCommon>
            }
        </div>
    );
};

export default SupportUsScopeLegendary;
