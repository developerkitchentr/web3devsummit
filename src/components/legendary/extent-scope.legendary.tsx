import ScopeHeadersEpic from "../epic/scope-headers.epic";
import ExtentCellEpic from "../epic/extent-cell.epic";
import {TopLevel} from "../../api/models";
import {getImageUrl} from "../../helper";

interface Props {
    mainContents: TopLevel[]
}

const ExtentScopeLegendary = ({mainContents}: Props) => {
    console.log(mainContents)
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
            {mainContents?.map(({id, attributes}) => (
                <ExtentCellEpic
                    key={id}
                    extent_head={attributes.title}
                    extent_image={getImageUrl(attributes.image)}
                    extent_icon={attributes.icon.data.attributes.url}
                    extent_list={attributes.content}
                />
            ))}
        </div>
    )
}

export default ExtentScopeLegendary