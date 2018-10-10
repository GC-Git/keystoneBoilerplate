const keystone = require('keystone');
let Event = keystone.list('Event');

module.exports = function(req, res){ 
    if(!req.body.name || !req.body.startTime || !req.body.endTime){
        return res.send({status:'incomplete data set'});
    };

    // This code will return an object with the properties of an Event from our schema, however the object has not yet been saved to the database.
    var newEvent = new Event.model(req.body);

    /* You can use newEvent.save() which implements Mongoose's save() method, however Keystone provides an updateItem() function 
    that runs Keystone's validators (which can include additional validation). If an item does not already exist, updateItem() 
    will create the item. */
    Event.updateItem(newEvent, req.body, function(error){
        res.locals.enquirySubmitted = true;
        if(error){res.locals.saveError = true};
        res.render('addEvent');
    });
};