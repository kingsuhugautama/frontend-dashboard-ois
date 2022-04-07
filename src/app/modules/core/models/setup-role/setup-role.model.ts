import { HttpResponseModel } from "src/app/modules/shared/models/Http-Operation/HttpResponseModel";
import { RolesModel } from "../setup-role-menu/setup-role-menu.model";

export class GetAllRoleActiveModel implements HttpResponseModel {
    responseResult: boolean;
    data: RolesModel[];
    message: string;
}