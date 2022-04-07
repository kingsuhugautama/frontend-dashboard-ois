import { Injectable } from '@angular/core';
import exampleMasterModel from 'src/app/modules/core/models/example/exampleMaster.model';
import { HttpOperationService } from '../../../shared/services/http-operation.service';
import { API } from 'src/app/api';

@Injectable({
    providedIn: 'root',
})
export class ExampleMasterService {
    constructor(private httpOperationService: HttpOperationService) { }

    postExampleWithAction(
        req: any,
        url: string,
        actionSukses: (data: any) => void,
        actionError: () => void
    ) {
        // spinner show
        // this.httpOperationService.defaultPostRequest(API.PIS.API_PIS.POST_ADMISI_RAWAT_JALAN, req).subscribe(
        //     (_result) => {
        //         // spinner mesaggeexample.json
        //         if (_result) {
        //             actionSukses(_result);
        //         } else {
        //             actionError();
        //         }
        //     },
        //     (err) => {
        //         actionError();
        //     }
        // );
    }

    postExample(req: exampleMasterModel) {
        // return this.httpOperationService.defaultPostRequest(API.IRJA.POST_ADMISI_RAWAT_JALAN, req);
    }

    getExample() {
        // return this.httpOperationService.defaultGetRequest(API.IRJA.GET_DATA_PASIEN_BY_NO_ANTRIAN);
    }
}
