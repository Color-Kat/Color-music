export interface RootObject {
    properties: any;
    tracks: ISong[];
}

export interface ISong {
    artists: Artist[];
    highlightsurls: Highlightsurls;
    hub: Hub;
    images: Images;
    key: string;
    layout: string;
    properties: any;
    share: Share;
    subtitle: string;
    title: string;
    type: string;
    url: string;
}

export interface ISongDetails {
    layout: string;
    type: string;
    key: string;
    title: string;
    subtitle: string;
    images: Images;
    share: Share;
    hub: Hub;
    url: string;
    artists: {
        id: string;
        adamid: string;
    }[];
    isrc: string;
    genres: {
        primary: string;
    };
    urlparams: {
        "{tracktitle}": string
        "{trackartist}": string
    };
    myshazam: any;
    albumadamid: string;
}


export interface Artist {
    adamid: string;
    alias: string;
    id: string;
}

export interface Highlightsurls {
    artisthighlightsurl: string;
    trackhighlighturl?: string;
}

export interface Hub {
    actions: Action[];
    displayname: string;
    explicit: boolean;
    image: string;
    options: Option[];
}

export interface Action {
    id?: string;
    name: string;
    type: string;
    uri?: string;
}

export interface Option {
    actions: Action[];

    colouroverflowimage: boolean;
    image: string;
    overflowimage: string;
}

export interface Images {
    background: string;
    coverart: string;
    coverarthq: string;
    joecolor: string;
}

export interface Share {
    avatar: string;
    href: string;
    html: string;
    image: string;
    snapchat: string;
    subject: string;
    text: string;
    twitter: string;
}