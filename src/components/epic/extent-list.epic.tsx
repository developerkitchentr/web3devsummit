import ExtentListItemCommon from "../common/extent-list-item.common";
import ExtentListIconCommon from "../common/extent-list-icon.common";

interface Props {
    head: string;
    list: ListItem[];
    variant?: string;
    icon: string
}

export interface ListItem {
    text: string;
}

const ExtentListEpic = ({ head, list, variant, icon }: Props) => {
    return (
        <div className={ `extent-list-epic ${ variant }` }>
            <ExtentListIconCommon variant="mb-5" src={ icon }/>
            <h2 className="color-white text-3xl mb-4">{ head }</h2>
            <ul>
                { list.map((list, index) => (
                    <ExtentListItemCommon key={ `${ head.trim() }-extent-list-epic-${ index }` }>
                        { list.text }
                    </ExtentListItemCommon>
                )) }
            </ul>
        </div>
    )
}

export default ExtentListEpic