request = require('./lib/request');
class Branches {
    constructor(hostname, token) {
        this.hostname = hostname;
        this.token = token;
        this._request = request;
    }

    /**
     * Get Branches
     */
    getBranches() {
        return this._request('GET', `branches`);
    }

    /**
     * Get Branch
     * @param {String} branchId the id of the wanted branch
     */
    getBranch(branchId) {
        return this._request('GET', `branches/id:${branchId}`);
    }

     /**
     * Create Branch
     * @param obj The insertion object.
     * @param obj.name The name of the branch.
     * @param obj.description The Description of the branch.
     */
    createBranch(obj) {
        if(!obj.name || !obj.description) {
            throw new Error('Branch has to have name and description');
        }
        return this._request('POST', `createbranch`, obj);
    }

    /**
     * Delete Branch
     * @param obj The object.
     * @param obj.branch_id The id of the branch.
     * @param obj.deleted_by_user_id Deleted by user id.
     */
    deleteBranch(obj) {
        if(!obj.branch_id || !obj.deleted_by_user_id) {
            throw new Error('To delete a branch branch_id and deleted_by_user_id are requied');
        }
        return this._request('POST', `createbranch`, obj);
    }

    /**
     * Change the status (active or inactive) of a branch
     * @param {String} branchId the id of the wanted branch
     * @param {String} status [active, inactive]
     */
    branchSetStatus(branchId, status) {
        return this._request('GET', `branchsetstatus/branch_id:${branchId},status:${status}`);
    }

    /**
     * Add a user to a branch
     * @param {String} branchId the id of the wanted branch
     * @param {String} userId id of the user
     */
    addUsertoBranch(branchId, userId) {
        return this._request('GET', `addusertobranch/user_id:${userId},branch_id:${branchId}`);
    }

    /**
     * Add a course to a branch
     * @param {String} branchId the id of the wanted branch
     * @param {String} courseId id of the course
     */
    addCoursetoBranch(branchId, courseId) {
        return this._request('GET', `addcoursetobranch/course_id:${courseId},branch_id:${branchId}`);
    }

}

module.exports = Branches;