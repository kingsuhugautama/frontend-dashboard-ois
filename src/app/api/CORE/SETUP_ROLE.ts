import { environment } from "src/environments/environment";

// ** SETUP ROLE
export const GET_ALL_ROLE = `${environment.webApiPis}` + 'Role/GetRoleAll';
export const GET_ALL_ROLE_ACTIVE = `${environment.webApiPis}` + 'Role/GetRoleActiveAll';