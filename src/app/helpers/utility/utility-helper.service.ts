import { Injectable } from '@angular/core';

interface age {
    years   :number;
    months  :number;
    days    :number;
}

@Injectable({
    providedIn: 'root'
})

export class UtilityHelperService {

    constructor() { }

    /**
     * @onRemoveInfo 
     * @Param Data: any, key: any[]
     * @Keterangan Menghapus key array yg ada pada Data
    */
    onRemoveInfo(Data: any, key: any[]): void {
        key.forEach((e) => {
            delete Data[e];
        });

        return Data;
    }

    /**
     * @onSplitKodeWilayahKecamatan 
     * @Param kode_kecamatan: any, Into: any[]
     * @Keterangan Memisahkan kode_kecamatan menjadi 3 array
     * @Keterangan Array 0 untuk kode_provinsi
     * @Keterangan Array 0 + Array 1 untuk kode_kota
    */
    onSplitKodeWilayahKecamatan(kode_kecamatan: any): object {
        const arr = kode_kecamatan.split('.');

        const wilayah = {
            kode_wilayah_provinsi: arr[0],
            kode_wilayah_kota: `${arr[0]}.${arr[1]}`,
        }

        return wilayah;
    }

    /**
     * @getDiskon 
     * @Param hargaAwal: number, dc: number
     * @Keterangan mendapatkan nilai diskon
    */
     getDiskon(hargaAwal:number,dc:number): number {
        let diskon:number;
        let hargaDiskon:number;
        if(dc != 0){
            diskon =hargaAwal * (dc/100);
            hargaDiskon = diskon;
        }else{
            hargaDiskon = 0;
        }
        return hargaDiskon;
    }

    getAge(dateString:string):age{
        let now = new Date();
      
        var yearNow = now.getFullYear();
        var monthNow = now.getMonth()+1;
        var dateNow = now.getDate();
        var tgl = dateString.split('-');
        var m = tgl[1];

        var dob = new Date(parseInt(tgl[0]),parseInt(tgl[1]),parseInt(tgl[2]));

        var yearDob = dob.getFullYear();
        var monthDob = dob.getMonth();
        var dateDob = dob.getDate();
        var age = {};
      
        var yearAge:number;
        yearAge = yearNow - yearDob;
      
        if (monthNow >= monthDob)
          var monthAge:number = monthNow - monthDob;
        else {
          yearAge--;
          var monthAge:number = 12 + monthNow -monthDob;
        }
      
        if (dateNow >= dateDob)
          var dateAge:number = dateNow - dateDob;
        else {
          monthAge--;
          var dateAge:number = 31 + dateNow - dateDob;
      
          if (monthAge < 0) {
            monthAge = 11;
            yearAge--;
          }
        }
      
        let _age:age = {
                years: yearAge,
                months: monthAge,
                days: dateAge
            };      
        
        return _age;
    }
}
