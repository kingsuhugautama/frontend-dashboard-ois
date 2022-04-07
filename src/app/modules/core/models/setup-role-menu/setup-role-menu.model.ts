export interface RolesModel {
    id_role: number;
    is_active: boolean;
    keterangan: string;
    nama_role: string;
    time_created: Date;
    time_deactivated: Date;
    user_created: number;
    user_deactivated: number;
}