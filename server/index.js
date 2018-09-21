require('dotenv').config();

const express = require ('express'),
{ json } = require('body-parser'),
    // ctlr = require ('./controller'),
    app = express (),
    port = process.env.PORT || 3001,
    massive = require('massive')
    // {getBands, postBand, putBand, deleteBand} = require('./bandCtrl');

    app.use(json()); // place this line above .get request

    massive(process.env.CONNECTION_STRING).then(dbInstance => {
        // console.log('dbInstance', dbInstance);
        app.set('db', dbInstance);
        dbInstance.init();
    });
    
    // app.get('/api/bands', getBands);
    // app.post('/api/bands', postBand);
    // app.put('/api/bands/:id', putBand);
    // app.delete('/api/bands/:id', deleteBand);


app.listen(port, () => { console.log(`Server reporting for duty from port ${port}`); })