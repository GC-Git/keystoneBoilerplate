// There's one more thing to do before you can launch your app. You need to have an initial user in your database. 
// You can do this through this update script, which Keystone will run on startup.


/* This will create a user with these details (though the password will be hashed before saving) when Keystone is 
started up. If you want to know more about update scripts, see Application Updates.

NOTE: You will likely end up committing your update scripts to your project, so you should not include sensitive 
information. Any passwords added in an update script should be manually changed afterwards. */
exports.create = {
    User: [
        {
            displayName: 'user1',
            email: 'user@keystonejs.com',
            password: 'admin',
        },
    ],
};