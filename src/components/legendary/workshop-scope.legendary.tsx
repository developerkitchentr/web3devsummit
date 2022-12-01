import React, { useContext } from 'react';
import ScopeHeadersEpic from "../epic/scope-headers.epic";
import AppContext from "../../context/site-context";
import WorkshopItemsCommon from "../common/workshop-items.common";
import { DataPanels } from "../../api/models";

const WorkshopScopeLegendary = ({workshops}: Props) => {
    const value = useContext(AppContext);

    return (
        <div>
            <ScopeHeadersEpic
                variant="mb-12"
                head={ value?.attributes.txt_header_workshoplar }
            />
            <div className="panels-scope-cell">
                {workshops?.map(({id, attributes}) => (
                    <WorkshopItemsCommon
                        key={id}
                        title={attributes.title}
                        desc={attributes.description}
                        src={attributes.logo}
                    />
                ))}
            </div>
        </div>
    );
};

interface Props {
    workshops: DataPanels[];
}

export default WorkshopScopeLegendary;