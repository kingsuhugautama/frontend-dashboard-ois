export interface HttpErrorResponseModel {
    responseResult: boolean;
    data: HttpErrorResponseDataModel;
    message: string;
}

interface HttpErrorResponseDataModel {
    inMessage: string;
    inStackTrace: string;
    outMessage: string;
    outStackTrace: string;
}
