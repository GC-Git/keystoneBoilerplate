const keystone = require('keystone');
let Event = keystone.list('Event');

module.exports = function(req, res){ 
    Event.model.find()
    .exec(function(err, data){
        if(err) {
            console.log(err);
            res.status(500).send('DB Error');
          }
          res.status(200).send(data);
    })
};