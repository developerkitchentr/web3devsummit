import React, { useContext } from 'react';
import AppContext from "../../context/site-context";
import ScopeHeadersEpic from "../epic/scope-headers.epic";
import PanelsItemsCommon from "../common/panels-items.common";
import { DataPanels } from "../../api/models";
import { sortByOrderDataPanels } from "../../utils/helpers";

interface Props {
    panels: DataPanels[];
}

const PanelsScopeLegendary = ({panels}: Props) => {
    const value = useContext(AppContext);

    return (
        <div>
            <ScopeHeadersEpic
                variant="mb-12"
                head={ value?.attributes.txt_header_paneller }
            />
            <div className="panels-scope-cell">
                {panels?.sort(sortByOrderDataPanels).map(({id, attributes}) => (
                    <PanelsItemsCommon
                        key={id}
                        desc={attributes.description}
                        title={attributes.title}
                        src={attributes.logo}
                    />
                ))}
            </div>
        </div>
    );
};

export default PanelsScopeLegendary;