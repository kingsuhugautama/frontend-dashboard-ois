export interface KanbanColumnModel {
    Id: any;
    HeaderText: string;
    HeaderBackgroundColor?: string;
    ColumnIcon: string;
    KeyField: string;
    ConnectedTo?: Object[];
    Data: KanbanCardModel[];
}

export interface KanbanCardModel {
    Id: any;
    Status: string;
    NamaPasien: string;
    Waktu: Date;
    NamaDokter: string;
    KodeResep: any;
    DetailResep: KanbanDetailResep[];
}

export interface KanbanDetailResep {
    Id: any;
    KodeResep: any;
    NamaObat: string;
    KodeObat: string;
    Satuan: string;
    Qty: number;
}