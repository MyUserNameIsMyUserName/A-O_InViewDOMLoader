// A^O_APPLICATION
// ao_app.js
'use strict';

let ao_app = {
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
    config : {
        appElemID = null
    },
    data: {},
    meth: {},
    init(conf = null){
        if (conf === null){
            console.warn('ERROR >> AO_APP.INIT() :: conf === null -> can not be empty value');
            return false;
        } 
        this.config = conf;
        return true;
    }
};


console.log('+- ao_app.js file done -+');