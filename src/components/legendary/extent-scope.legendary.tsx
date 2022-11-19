import ScopeHeadersEpic from "../epic/scope-headers.epic";
import ExtentCellEpic from "../epic/extent-cell.epic";
import {TopLevel} from "../../api/models";
import {getImageUrl} from "../../helper";
import AppContext from "../../context/site-context";
import {useContext} from "react";

interface Props {
    mainContents: TopLevel[]
}

const ExtentScopeLegendary = ({mainContents}: Props) => {
    const value = useContext(AppContext);
    return (
        <div id="extent" className="extent-scope-legendary">
            <ScopeHeadersEpic
                variant="mb-12"
                head={value?.attributes.txt_kapsam}
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