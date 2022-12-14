
/* ------ MAIN CONTENTS ------ */
export interface TopLevel {
    id:         number;
    attributes: Attributes;
}

export interface Attributes {
    title:       string;
    content:     string;
    list_order:   number;
    is_right:     boolean;
    locale:      string;
    icon: ICON;
    image: IMAGE
}

/* -------- SPONSORS ------- */

export interface DataSponsors {
    id:         number;
    attributes: DataSponsorsAttributes;
}

export interface DataSponsorsAttributes {
    title:       string;
    list_order:   number;
    locale:      string;
    sponsors:    Sponsor[];
}

export interface Sponsor {
    id:        number;
    name:      string | null;
    list_order: number;
    linkedin:  string | null;
    twitter:   string | null;
    logo:      ICON;
    url: string | null
}

/* -------- TAB CONTENT -------- */
export interface DataTabContent {
    id:         number;
    attributes: Attributes2;
}

export interface Attributes2 {
    title:         string;
    list_order:     number;
    left_content:   string;
    right_content:  string;
    locale:        string;
}

/* -------- SITE GENERAL ------- */
export interface SiteGeneral {
    id:         number;
    attributes: Attributes3;
}

export interface Attributes3 {
    txt_kapsam:                        string;
    txt_panelistler:                   string;
    txt_destekcilerimiz:               string;
    txt_bilet:                         string;
    ben_txt_sponsor_ol:                string;
    txt_header_event_whitepaper:       string;
    txt_subheader_event_whitepaper:    string;
    link_whitepaper:                   string;
    createdAt:                         Date;
    updatedAt:                         Date;
    publishedAt:                       Date;
    locale:                            string;
    txt_header_panelistler:            string;
    txt_subheader_panelistler:         string;
    txt_yakinda:                       string;
    txt_header_gonullu_ekibe_katil:    string;
    txt_subheader_gonullu_ekibe_katil: string;
    txt_btn_gonullu_basvur:            string;
    txt_header_gonullu_neden:          string;
    txt_gonullu_neden_icerik:          string;
    txt_header_gonullu_gorevler:       string;
    txt_gonullu_gorevler_icerik:       string;
    txt_header_gonullu_surec:          string;
    txt_gonullu_surec_icerik:          string;
    txt_header_bizi_destekleyin:       string;
    txt_bizi_destekleyin_icerik:       string;
    txt_header_bilet:                  string;
    txt_subheader_biler:               string;
    link_bilet_al:                     string;
    link_destekcimiz_ol:               string;
    txt_btn_bizi_destekleyin:          string;
    txt_subheader_kapsam:              string;
    txt_btn_formu_doldur: string;
    txt_gonullu_ol: string;
    bitcoin_wallet_address: string,
    ethereum_wallet_address: string,
    solana_wallet_address: string,
    avalache_wallet_address: string,
    link_gonullumuz_olun: string,
    txt_bize_destek_olun: string,
    txt_header_paneller: string,
    txt_header_workshoplar: string,
    linkedin: string,
    twitter: string,
    venue_header: string,
    venue_subheader: string,
    venue_description: string,
    venue_address: string,
    venue_coordinate: string,
    venue_images: {
        data: DataIMAGE[]
    },
    txt_menu_mekan: string,
    txt_directions: string,
    txt_volunteer_header: string
}

/* ----------------------------------------------------------------------------------  VolunteersData */

export interface Volunteers {
    id:         number;
    attributes: VolunteersAttributes;
}

export interface VolunteersAttributes {
    name_surname:  string;
    name_surname2: string;
    linkedin:      string;
    twitter:       string;
    job_title:     string;
    photo:         IMAGE;
}

/* ----------------------------------------------------------------------------------  PanelistData */

export interface PanelistData {
    id:         number;
    attributes: Attributes4;
}

export interface Attributes4 {
    name_surname: string;
    name_surname2: string;
    linkedin:     string;
    twitter:      string;
    job_title:    string;
    list_order:   number;
    is_tmp:       boolean;
    photo: IMAGE
}

export interface DataPanels {
    id:         number;
    attributes: Attributes7;
}

export interface Attributes7 {
    title:         string;
    list_order:    number;
    description:   string;
    logo:          IMAGE;
}



/* ----------------------------------------------------------------------------------  GENERAL*/

export interface IMAGE {
    data: DataIMAGE;
}

export interface DataIMAGE {
    id:         number;
    attributes: Attributes6;
}

export interface Formats {
    thumbnail: Attributes5;
    small:     Attributes5;
    medium:    Attributes5;
    large:     Attributes5;
}

export interface Attributes5 {
    width:    number;
    height:   number;
    url:      string;
}

export interface Attributes6 {
    width:    number;
    height:   number;
    formats: Formats;
    url:      string;
}

interface ICON {
    "data": {
        "id": 11,
        "attributes": {
            "url": "/uploads/microphone_5c9becd681.png"
        }
    }
}
