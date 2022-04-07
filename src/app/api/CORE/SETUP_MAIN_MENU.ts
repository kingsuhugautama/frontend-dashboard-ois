import { environment } from "src/environments/environment";

// ** SETUP ROLE MENU
export const GET_MAIN_MENU_FOR_MAPPING = `${environment.webApiPis}` + 'Menu/GetMainMenuForMapping/';
export const GET_MAIN_MENU_NOT_IN_ROLE = `${environment.webApiPis}` + 'Menu/GetMainMenuForMappingNotInRole/';
export const PUT_DELETE_MAIN_MENU_FROM_ROLE = `${environment.webApiPis}` + 'Menu/DeleteMenuFromRole';
export const POST_MAIN_MENU_TO_ROLE = `${environment.webApiPis}` + 'Menu/InsertMainMenuToRole';