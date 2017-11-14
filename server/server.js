var express = require('express');

var app = express(); // app is what is RETURNED when we call express as a function

app.use(express.static('server/public')); // but also... express is an object with methods!

app.listen(5000, function() {
    console.log('listening on port 5000');
})