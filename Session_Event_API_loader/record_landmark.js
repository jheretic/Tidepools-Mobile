var mongoose = require('mongoose'),
	monguurl = require('monguurl'),
    loader = require('./load_landmarks.js');

mongoose.connect('mongodb://localhost/amctest2');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {

    //delete all sessions / reload every 1/2 day?
    
    loader('https://talk.alliedmedia.org/backbone/rest/views/2013sesh_backbone_user.jsonp', 
        function (err, count) {
            if (err) // TODO handle the error
                console.log(err);
            else
                console.log("success, ", count, "records loaded");
                db.close();
        });
});

