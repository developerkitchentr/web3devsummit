import ScopeHeadersEpic from "../epic/scope-headers.epic";
import ExtentCellEpic from "../epic/extent-cell.epic";

const ExtentScopeLegendary = () => {
    return (
        <div id="extent" className="extent-scope-legendary">
            <ScopeHeadersEpic
                variant="mb-12"
                head="Kapsam"
                sub="Risus, auctor sagittis nec pretium id sit faucibus. In elit dignissim vitae diam vestibulum curabitur ac."
            />
            <div className="mb-12">
                <button className="button-common primary mx-auto">Daha fazla bilgi edin</button>
            </div>
            <ExtentCellEpic
                extent_head="Paneller"
                extent_image="/images/content-01.png"
                extent_icon="/images/featured-icon.svg"
                extent_list={ [
                    { text: "Blockchain üzerinde geliştirilmiş projeleri yakından tanıma" },
                    { text: "Proje Süreçlerinin analizini dinleme" },
                    { text: "Dignissim dolor ac ultrices eu congue facilisis sed gravida ultrices." }
                ] }
            />
            <ExtentCellEpic
                extent_head="Workshop"
                extent_image="/images/content-02.png"
                extent_icon="/images/featured-icon-2.svg"
                extent_list={ [
                    { text: "Çeşitli dillerde giriş seviyesi" },
                    { text: "Uygulamalı Teorik Eğitimler" },
                    { text: "Dignissim dolor ac ultrices eu congue facilisis sed gravida ultrices." }
                ] }
            />
            <ExtentCellEpic
                extent_head="Network"
                extent_image="/images/content-03.png"
                extent_icon="/images/featured-icon-3.svg"
                extent_list={ [
                    { text: "Katılımcı firmalardan teknik ekiplerle buluşma" },
                    { text: "Orci dui nec diam eget eget nulla." },
                    { text: "Dignissim dolor ac ultrices eu congue facilisis sed gravida ultrices." }
                ] }
            />
        </div>
    )
}

export default ExtentScopeLegendary