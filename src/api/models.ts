export interface TopLevel {
    id:         number;
    attributes: Attributes;
}

export interface Attributes {
    title:       string;
    content:     string;
    listOrder:   number;
    isRight:     boolean;
    locale:      string;
    icon: {
        "data": {
            "id": 11,
            "attributes": {
                "url": "/uploads/microphone_5c9becd681.png"
            }
        }
    };
    image: IMAGE
}


export interface IMAGE {
    data: DataIMAGE;
}

export interface DataIMAGE {
    id:         number;
    attributes: Attributes3;
}

export interface Formats {
    thumbnail: Attributes2;
    small:     Attributes2;
    medium:    Attributes2;
    large:     Attributes2;
}

export interface Attributes2 {
    width:    number;
    height:   number;
    url:      string;
}

export interface Attributes3 {
    width:    number;
    height:   number;
    formats: Formats;
    url:      string;
}
