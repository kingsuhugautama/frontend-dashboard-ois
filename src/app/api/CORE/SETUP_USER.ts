import { environment } from "src/environments/environment";

// ** SETUP USER
export const POST_INSERT_USER = `${environment.webApiPis}` + 'User/InsertUser';
export const GET_ALL_USER_ACTIVE = `${environment.webApiPis}` + 'User/GetUserActiveAll';
export const GET_ALL_USER_KASIR = `${environment.webApiPis}` + 'User/GetUserKasir';