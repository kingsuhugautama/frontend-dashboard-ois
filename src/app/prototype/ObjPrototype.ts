export { } // to make it a module

declare global { // to access the global type String
    interface Object {
        removeInfo(): void;
    }
}

/** Menjumlahkan */
Object.prototype.removeInfo = function(){
    delete this.user_created;
    delete this.time_created;
    delete this.user_deactived;
    delete this.time_deactived;
}
