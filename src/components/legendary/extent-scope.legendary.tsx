import ScopeHeadersEpic from "../epic/scope-headers.epic";
import ExtentCellEpic from "../epic/extent-cell.epic";

const ExtentScopeLegendary = () => {
    return (
        <div id="extent" className="extent-scope-legendary">
            <ScopeHeadersEpic
                variant="mb-12"
                head="Kimler Katılmalı"
                sub="Blockchain ekosisteminde yer alan yaratıcı ve geliştiricilerle iş modelini blockchain temelli teknolojiler ile güçlendirmek isteyen iş geliştirme uzmanları için yepyeni bir deneyim sunuyoruz."
            />
            <div className="mb-12">
                <button className="button-common primary mx-auto">Daha fazla bilgi edin</button>
            </div>
            <ExtentCellEpic
                extent_head="Paneller"
                extent_image="/images/content-01.png"
                extent_icon="/images/featured-icon.svg"
                extent_list={ [
                    { text: "Bir dApp nasıl ortaya çıkar." },
                    { text: "Web3 dünyasında yaratıcı ve üretken ekipler kurmak" },
                    { text: "Dünyadaki trendler…" },
                    { text: "Sonraki 1 Milyon kullanıcı: GameFi" },
                    { text: "… ve çok daha fazlası" }
                ] }
            />
            <ExtentCellEpic
                extent_head="Workshop"
                extent_image="/images/content-02.png"
                extent_icon="/images/featured-icon-2.svg"
                extent_list={ [
                    { text: "Web3 dünyasında söz sahibi yazılım dillerine hızlı bakış" },
                    { text: "White Paper nasıl yazılır?" },
                    { text: "Blockchain’de kod yazmanın felsefesi" },
                    { text: "…ve çok daha fazlası" }
                ] }
            />
            <ExtentCellEpic
                extent_head="Network"
                extent_image="/images/content-03.png"
                extent_icon="/images/featured-icon-3.svg"
                extent_list={ [
                    { text: "İşini blockchain üzerinde inşa edenlerle tanış" },
                    { text: "Web3 ekosisteminin her kesiminden öncü kişilerle iletişim kurma şansı" },
                    { text: "Geleceği birlikte inşaa edeceğiniz iş birlikteliklerine imza atma şansı" }
                ] }
            />
        </div>
    )
}

export default ExtentScopeLegendary