import { Injectable } from '@angular/core';

const CryptoJS = require('crypto-js');

@Injectable({
    providedIn: 'root'
})
export class EncryptionService {

    Key = "GRAHCIS";

    constructor() { }

    encrypt(data: any, key?: any): any {
        data = CryptoJS.AES.encrypt(data, this.Key).toString();
        return data;
    }

    decrypt(data: any, key?: any): any {
        data = CryptoJS.AES.decrypt(data, this.Key).toString(CryptoJS.enc.Utf8);
        return data;
    }
}
