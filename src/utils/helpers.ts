import {DataPanels, PanelistData, Volunteers} from "../api/models";

export function copy(val: string) {
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
}

export const sortByTitleDataPanels = (a: DataPanels, b: DataPanels) => {
    return a.attributes.title.localeCompare(b.attributes.title)
}

export const sortByOrderDataPanels = (a: DataPanels, b: DataPanels) => {
    return a.attributes.list_order - b.attributes.list_order
}

export const sortByNamePanelistData = (a: PanelistData, b: PanelistData) => {
    return a.attributes.name_surname2.localeCompare(b.attributes.name_surname2)
}

export const sortByNameVolunteerData = (a: Volunteers, b: Volunteers) => {
    return a.attributes.name_surname2.localeCompare(b.attributes.name_surname2)
}




