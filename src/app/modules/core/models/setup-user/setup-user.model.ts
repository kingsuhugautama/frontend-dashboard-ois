import { HttpResponseModel } from "src/app/modules/shared/models/Http-Operation/HttpResponseModel";

export interface PostSetupUserModel {
    id_role: number;
    user_name: string;
    password: string;
    full_name: string;
    user_created: number;
}

export interface GetSetupUserModel {
    app_tipe: string;
    full_name: string;
    full_name_created: string;
    full_name_deactived: string;
    id_outlet: number;
    id_role: number;
    id_user: number;
    is_active: boolean;
    nama_role: string;
    time_created: Date;
    time_deactived: Date;
    time_last_login: Date;
    time_last_logout: Date;
    user_created: number;
    user_deactived: number;
    user_name: string;
    user_name_created: string;
    user_name_deactived: string;
}

export interface IUserKasirModel {
    id_user?: number;
    id_role?: number;
    nama_role?: string;
    user_name?: string;
    full_name?: string;
    id_outlet?: number;
    time_last_login?: string;
    time_last_logout?: string;
    app_tipe?: string;
    is_active?: boolean;
    user_created?: number;
    user_name_created?: any;
    full_name_created?: any;
    time_created?: string;
    user_deactived?: number;
    user_name_deactived?: any;
    full_name_deactived?: any;
    time_deactived?: string;
}

export class GetAllUserKasirModel implements HttpResponseModel {
    responseResult: boolean;
    data: IUserKasirModel[];
    message: string;
}