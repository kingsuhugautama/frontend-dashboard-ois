// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const webApiDemo = "http://134.209.102.123";

export const webApiUrl = "http://174.138.22.139";

export const modeDevelopment = true;

export const webApi = modeDevelopment ? webApiUrl : webApiDemo;

export const isFormularium = true;

export const environment = {

    production: false,

    version: '0.0.0',

    // ** Web Api 
    webApiForSentry: `${webApi}:8888/api`,

    /** 
     * @webApiMM http://174.138.22.139:8888/api/pharmm/
     * @Keterangan Menggunakan Gateway jadi Port nya diubah ke 8888 dan ditambahkan /pharmm 
    */
    webApiMM: `${webApi}:8888/api/pharmm/`,

    /** 
     * @webApiPHARMACY http://174.138.22.139:8888/api/farmasi/
     * @Keterangan Menggunakan Gateway jadi Port nya diubah ke 8888 dan ditambahkan /farmasi 
    */
    webApiPHARMACY: `${webApi}:8888/api/farmasi/`,

    /** 
     * @webApiPis http://174.138.22.139:8888/api/pis/
     * @Keterangan Menggunakan Gateway jadi Port nya diubah ke 8888 dan ditambahkan /pis 
    */
    webApiPis: `${webApi}:8888/api/pis/`,

    /** 
     * @webApiBilling http://174.138.22.139:8888/api/billing/
     * @Keterangan Menggunakan Gateway jadi Port nya diubah ke 8888 dan ditambahkan /billing 
    */
    webApiBilling: `${webApi}:8888/api/billing/`,

    /** 
     * @webApiAdmisi http://174.138.22.139:8888/api/admisi/
     * @Keterangan Menggunakan Gateway jadi Port nya diubah ke 8888 dan ditambahkan /admisi 
    */
    webApiAdmisi: `${webApi}:8888/api/admisi/`,

    /** 
     * @webApiLaporan http://174.138.22.139:8888/api/billing/
     * @Keterangan Menggunakan Gateway jadi Port nya diubah ke 8888 dan ditambahkan /billing 
    */
    webApiLaporan: `${webApi}:8080/jasperserver/rest_v2/reports/`,

    /** 
     * @webApiSocket http://174.138.22.139:3000
    */
    webApiSocket: `${webApi}:3000`,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
