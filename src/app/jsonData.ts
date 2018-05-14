export interface Wine {
    id_uva: string;
    uva: string;
}

export interface IJson {
    tipos: string;
    wines: Wine[];
}
export interface IWine {
    name: string;
    description?: any;
    price?: any;
    status: any;
}
export interface IFeature {
    id: string;
    name: string;
    description?: any;
    id_pais: string;
    price?: any;
    status: string;
    picture?: any;
    date: string;
}
