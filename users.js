request = require('./lib/request');

class Users {
    constructor(hostname, token) {
        this.hostname = hostname;
        this.token = token;
        this._request = request;
    }

    /**
     * Get Users
     */
    getUsers() {
        return this._request('GET', `users`);
    }

    /**
     * Get User By Id
     * @param {String} userId
     */
    getUserById(userId) {
        return this._request('GET', `users/id:${userId}`);
    }

    /**
     * Get User By Email
     * @param {String} userEmail
     */
    getUserByEmail(userEmail) {
        return this._request('GET', `users/email:${userEmail}`);
    }

    /**
     * Change the status (active or inactive) of a user
     * @param {String} userId user id
     * @param {status} status (active or inactive)
     */
    setStatus(userId, status) {
        return this._request('GET', `users/user_id:${userId},status:${status}`);
    }

    /**
    * Sign up a user
    * @param obj The insertion object.
    * @param obj.first_name User first name.
    * @param obj.last_name User last name.
    * @param obj.email User email. 
    * @param obj.login User username
    * @param obj.password User password
    */
    userSignup(obj) {
        if (!obj.first_name || !obj.last_name || !obj.email || !obj.login || !obj.password) {
            throw new Error('User has to have first_name, last_name, email, login and password');
        }
        return this._request('POST', `usersignup`, obj);
    }

    /**
    * Edit a user
    * @param obj The insertion object.
    * @param obj.user_id User id.
    * @param obj.first_name User first name.
    * @param obj.last_name User last name.
    * @param obj.email User email. 
    * @param obj.login User username
    * @param obj.password User password
    * @param obj.bio User bio
    * @param obj.timezone User timezone
    */
    editUser(obj) {
        if (!obj.user_id) {
            throw new Error('To edit user, User id must be sent');
        }
        return this._request('POST', `edituser`, obj);
    }

    /**
    * Delet a User
    * @param obj The insertion object.
    * @param obj.user_id User id.
    * @param obj.deleted_by_user_id Deleted by user id
    */
   deleteUser(obj) {
    if (!obj.user_id || !obj.deleted_by_user_id) {
        throw new Error('To delete a user user_id and deleted_by_user_id are requied');
    }
    return this._request('POST', `deleteuser`, obj);
}

    /**
     * Get Users By Custom Field
     * @param fieldValue Field Value i.e: test
     */
    getUsersByCustomField(fieldValue) {
        return this._request('GET', `getusersbycustomfield/custom_field_value:${fieldValue}`);
    }

    /**
    * Get User Progress in units
    * @param userId The id of the user
    * @param unitId The id of the unit
    */
    getUsersProgressInUnits(userId, unitId) {
        return this._request('GET', `getusersprogressinunits/unit_id:${unitId},user_id:${userId}`);
    }

    /**
    * Edit User Custom Field
    * @param obj The insertion object.
    * @param obj.user_id User id.
    * @param obj.first_name User first name.
    * @param obj.last_name User last name.
    * @param obj.email User email. 
    * @param obj.login User username
    * @param obj.password User password
    * @param obj.bio User bio
    * @param obj.timezone User timezone
     */
    editUserCustomFields(obj) {
        if (!obj.user_id) {
            throw new Error('To edit user custom fields, User id must be sent');
        }
        return this._request('POST', `editusercustomfields`, obj);
    }

    /**
     * Login a User
     * @param obj The insertion object.
     * @param obj.login The name of the user.
     * @param obj.password  password.
     * @param obj.logout_redirect Logout redirect.
     */
    userLogin(obj) {
        if (!obj.login || !obj.login) {
            throw new Error('For Logging a user login and password are required');
        }
        return this._request('POST', `userlogin`, obj);
    }

    /**
     * Logout a User
     * @param obj The insertion object.
     * @param obj.user_id The id of the user.
     * @param obj.next  next url example.com.
     */
    userLogout(obj) {
        if (!obj.user_id) {
            throw new Error('For Logging Out user_id is required');
        }
        return this._request('POST', `userlogout`, obj);
    }

    /**
     * Get custom registration fields
     */
    getCustomRegistrationFields() {
        return this._request('GET', `getcustomregistrationfields`);
    }

    /**
     * Forgot username routine and send username to email
     * @param userEmail The email of the user
     */
    forgotUsername(userEmail) {
        return this._request('GET', `forgotusername/email:${userEmail}`);
    }

    /**
    * Forgot password routine and send reset password to email
    * @param username The username of the user
    */
    forgotPassword(username) {
        return this._request('GET', `forgotpassword/username:${username}`);
    }
}

module.exports = Users;