var express = require('express');
var app = express();

app.use(express.static('app'));          //Where the static resources are located

app.listen(5000, function(){
    console.log('server is ready');
})