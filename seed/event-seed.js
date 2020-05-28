const db = require('../config/database')
const Event = require('../models/Event.model')

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }
for (let index = 0; index < 10; index++) {
   
    var newEvent = new Event({
        image:'https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg',
        title: makeid(5) + '_' + index,
        description: makeid(20),
        location: makeid(5),
        date: Date.now()
    
    })

    newEvent.save( (err)=> {
        if(!err) {
            console.log('record was added')
        } else {
            console.log(err)
        }
    })
    
}


