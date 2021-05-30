// A^O_APPLICATION
// ao_app.js
'use strict';

const AO_APP = {
    info : {
        name: "A^O_Application Driver Module",
        description: "A^O_Application Driver Module",
        date: "23.05.2021",
        author: {
            name : "Slavko V.",
            alias: "HopeCrusher",
            email: "slavko.vuletic92@gmail.com"
        },
    },
    elems : {
        appElem : null
    },
    config : {
        appElemID : null
    },
    data: {},
    meth: {},
    init(conf = null){
        if (conf === null){
            console.warn('ERROR >> AO_APP.INIT() :: conf === null -> can not be empty value');
            return false;
        } 
        this.config = conf;
        console.log(this);
        return true;
    }
};

console.log(AO_APP);
console.log('+- ao_app.js file done -+');