const keystone = require('keystone');


// This constructor will create a User model which is a keystone.List. This list doesn't have any properties yet, so isn't going to 
// be very useful. 
let User = new keystone.List('User');

// Let's add some data fields to User
User.add({
    // This demonstrates the most basic field definition. Every field needs a type property defined: displayName uses JavaScript's default String type.
    displayName: {type: String},
    /* The password field adds a defined shape to the data and some extra UI and data layer validation. Keystone's Password field types 
    are automatically encrypted when saved. In addition, the Keystone admin UI will not display the contents of the password field and will require a password to be entered twice to 
    change it. */
    password: { type: keystone.Field.Types.Password },
    /* Keystone's Email type validates that field entries look like valid email addresses. In addition, we have passed a second option of unique: true which forces the field to be 
    unique within the database. */
    email: { type: keystone.Field.Types.Email, unique: true}
});

// Next, since this User model will be used for logging into the admin UI you need to add the property canAccessKeystone. We are 
// going have a User model that allows all users to access to Keystone, but you will likely want to implement more fine-grained 
// control for your own apps.
User.schema.virtual('canAccessKeystone').get(function(){
    return true;
})

// The final part of setting up your user model is to define the default columns to be displayed in the admin UI.
User.defaultColumns = 'id, displayName, email';

// Register the model so Keystone knows to include User in its list of models.
User.register(); 