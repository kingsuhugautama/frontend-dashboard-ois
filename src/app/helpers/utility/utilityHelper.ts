// export function removeInfo(Data:any,key:any[]){
//     key.forEach(e => {
//         delete Data[e];
//     });
//     return Data;
// }

export default class utilityHelper{

    public removeInfo(Data:any,key:any[]){
      key.forEach(e => {
        delete Data[e];
      });
      return Data;
    }

    public getAge(dateString:string){
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
      
        var yearAge;
        yearAge = yearNow - yearDob;
      
        if (monthNow >= monthDob)
          var monthAge = monthNow - monthDob;
        else {
          yearAge--;
          var monthAge = 12 + monthNow -monthDob;
        }
      
        if (dateNow >= dateDob)
          var dateAge = dateNow - dateDob;
        else {
          monthAge--;
          var dateAge = 31 + dateNow - dateDob;
      
          if (monthAge < 0) {
            monthAge = 11;
            yearAge--;
          }
        }
      
        age = {
            years: yearAge,
            months: monthAge,
            days: dateAge
            };      
        
        return age;
    }
}