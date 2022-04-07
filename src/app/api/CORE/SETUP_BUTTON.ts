import { environment } from "src/environments/environment";

export const POST_BUTTON_MENU_FOR_MAPPING = `${environment.webApiPis}` + 'Button/GetButtonForMapping';
export const PUT_DELETE_BUTTON_FROM_ROLE = `${environment.webApiPis}` + 'Button/DeleteButtonFromRole';
export const POST_BUTTON_TO_ROLE = `${environment.webApiPis}` + 'Button/InsertButtonToRole';