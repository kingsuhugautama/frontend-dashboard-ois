import { environment } from "src/environments/environment";

export const POST_FIELD_GRID_MENU_FOR_MAPPING = `${environment.webApiPis}` + 'FieldGrid/GetFieldGridForMapping';
export const PUT_DELETE_FIELD_GRID_FROM_ROLE = `${environment.webApiPis}` + 'FieldGrid/DeleteFieldGridFromRole';
export const POST_FIELD_GRID_TO_ROLE = `${environment.webApiPis}` + 'FieldGrid/InsertFieldGridToRole';