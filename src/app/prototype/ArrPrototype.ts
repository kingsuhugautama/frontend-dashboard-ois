export { } // to make it a module

declare global { // to access the global type String
    interface Array<T> {
        sum(prop: any): number;
        insertToIndex(index:number,item:any): void;
        orderBy(prop: T): void;
    }
}

/** Menjumlahkan */
Array.prototype.sum = function(prop){
    
    var total = 0
    for ( var i = 0, _len = this.length; i < _len; i++ ) {
        total += this[i][prop]
    }

    return total
    
}

/** menyelipkan data di array index yg sudah di tentukan */
Array.prototype.insertToIndex = function ( index ) {
    // this.splice( index, 0, item );
    index = Math.min(index, this.length);
    arguments.length > 1
        && this.splice.apply(this, [index, 0].concat([].pop.call(arguments)))
        && this.insertToIndex.apply(this, arguments);
    return this;
};

/** mengurutkan data yang sudah di tentukan */
Array.prototype.orderBy = function( prop ){
    
    function dynamicSort ( property ){
        var sortOrder = 1;
        if(property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
        }
        return function (a,b) {
            /* next line works with strings and numbers, 
            * and you may want to customize it to your needs
            */
            var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
            return result * sortOrder;
        }
    }

    this.sort(dynamicSort(prop));
}
