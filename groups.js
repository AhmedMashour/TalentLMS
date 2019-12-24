request = require('./lib/request');

class Groups {
    constructor(hostname, token) {
        this.hostname = hostname;
        this.token = token;
        this._request = request;
    }

     /**
     * Get Groups
     */
    getGroups() {
        return this._request('GET', `groups`);
    }

    /**
     * Get Group
     * @param {String} groupId
     */
    getGroup(groupId) {
        return this._request('GET', `groups/id:${groupId}`);
    }
    
     /**
     * Add User To Group
     * @param obj The insertion object.
     * @param obj.name The name of the group.
     * @param obj.description The Description of the group.
     * @param obj.key group code.
     * @param obj.price group price
     * @param ob.creator_id creator id
     */
   createGroup(obj) {
        if (!obj.name || !obj.description || !obj.key) {
            throw new Error('Group has to have name and description and code');
        }
        return this._request('POST', `creategroup`, obj);
    }

    /**
     * Delete a Group
     * @param obj The insertion object.
     * @param obj.group_id The name of the group.
     * @param obj.deleted_by_user_id Deleted by user id.
     */
    deleteGroup(obj) {
        if (!obj.group_id || !obj.deleted_by_user_id) {
            throw new Error('For deleting group object has to have group_id and deleted_by_user_id');
        }
        return this._request('POST', `deletegroup`, obj);
    }

    /**
     * Add User To Group
     * @param userId The id of the user object.
     * @param groupKey The key of the group.
     */
    addUserToGroup(userId, groupKey) {
        return this._request('GET', `addusertogroup/user_id:${userId},group_key:${groupKey}`);
    }

    /**
     * Remove User From Group
     * @param groupId The id of the group.
     * @param userId The id of the user.
     */
    removeUserFromGroup(groupId, userId) {
        return this._request('GET', `removeuserfromgroup/user_id:${userId},group_id:${groupId}`);
    }

     /**
     * Add Course To Group
     * @param groupId The id of the group.
     * @param courseId The id of the course.
     */
    addCourseToGroup(groupId, courseId) {
        return this._request('GET', `addcoursetogroup/course_id:${courseId},group_id:${groupId}`);
    }
}

module.exports = Groups;