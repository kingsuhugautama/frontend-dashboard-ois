import { environment } from 'src/environments/environment';

export const POST_AUTHENTICATION = `${environment.webApiPis}` + 'Authentication/Login';
export const POST_LOGOUT = `${environment.webApiPis}` + 'Authentication/SetLogoutTime';
export const PUT_RESET_PASSWORD = `${environment.webApiPis}` + 'Authentication/ResetPassword/';
export const PUT_CHANGE_PASSWORD = `${environment.webApiPis}` + 'Authentication/ChangePassword';
export const PUT_CHANGE_PASSWORD_123 = `${environment.webApiPis}` + 'Authentication/ChangePassword';
