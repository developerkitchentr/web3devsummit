import ExtentListEpic, { ListItem } from "./extent-list.epic";
import ExtentCellImageCommon from "../common/extent-cell-image.common";

interface Props {
    extent_list: ListItem[];
    extent_head: string;
    extent_image: string;
    extent_icon: string
}

const ExtentCellEpic = ({ extent_list, extent_head, extent_image, extent_icon }: Props) => {
    return (
        <div className="extent-cell-epic flex flex-row items-center mb-5">
            <ExtentListEpic
                variant="basis-1/2"
                head={ extent_head }
                list={ extent_list }
                icon={ extent_icon }
            />
            <ExtentCellImageCommon
                variant="basis-1/2"
                src={ extent_image }
            />
        </div>
    )
}

export default ExtentCellEpic