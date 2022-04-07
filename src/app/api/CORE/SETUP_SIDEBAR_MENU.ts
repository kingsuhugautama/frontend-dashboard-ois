import { environment } from "src/environments/environment";

export const POST_SIDEBAR_MENU_FOR_MAPPING = `${environment.webApiPis}` + 'Menu/GetSidebarMenuForMapping';
export const PUT_DELETE_SIDEBAR_MENU_FROM_ROLE = `${environment.webApiPis}` + 'Menu/DeleteSideBarMenuFromRole';
export const POST_SIDEBAR_MENU_TO_ROLE = `${environment.webApiPis}` + 'Menu/InsertSideBarMenuToRole';