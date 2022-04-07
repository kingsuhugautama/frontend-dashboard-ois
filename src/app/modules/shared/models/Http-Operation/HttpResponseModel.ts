export interface HttpResponseModel {
    responseResult: boolean;
    data: any;
    message: string;
}

/**
 * @PostRequestByDynamicFiterModel base model Request untuk Post Request By Dynamic Filter
*/
export interface PostRequestByDynamicFiterModel {
    columnName: string;
    filter: string;
    searchText: string;
    searchText2: string;
}