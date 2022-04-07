import { MenuJsonModel } from '../../core/models/navigation/menu.model';
import { HttpResponseModel } from '../../shared/models/Http-Operation/HttpResponseModel';

export class AuthenticationResponseModel implements HttpResponseModel {
    data: IAuthenticationResponseModel;
    message: string;
    responseResult: boolean;
}

export interface IAuthenticationResponseModel {
    full_name: string;
    id_karyawan: number;
    id_role: number;
    id_user?: number;
    isAuth: boolean;
    menuJson: MenuJsonModel;
    nama_role: string;
    timeOut: number;
    token: string;
    user_name: string;
}

export interface PostChangePassword {
    id_user: number;
    password_lama: string;
    password_baru: string;
}
