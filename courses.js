request = require('./lib/request');
class Courses {
    constructor(hostname, token) {
        this.hostname = hostname;
        this.token = token;
        this._request = request;
    }

    /**
     * Get Courses
     */
    getCourses() {
        return this._request('GET', `courses`);
    }

    /**
     * Get Course
     * @param {String} courseId
     */
    getCourse(courseId) {
        return this._request('GET', `courses/id:${courseId}`);
    }
    
    /**
     * Get User Status In Course
     * @param {String} courseId the id of the wanted course
     */
    getUserStatusInCourse(courseId, userId) {
        return this._request('GET', `getuserstatusincourse/course_id:${courseId},user_id:${userId}`);
    }

     /**
     * Add User To Course
     * @param obj The insertion object.
     * @param obj.name The name of the course.
     * @param obj.description The Description of the course.
     * @param obj.code course code. 
     */
   createCourse(obj) {
        if (!obj.name || !obj.description || !obj.code) {
            throw new Error('Course has to have name and description and code');
        }
        return this._request('POST', `createcourse`, obj);
    }

    /**
     * Delete a Course
     * @param obj The insertion object.
     * @param obj.course_id The name of the course.
     * @param obj.deleted_by_user_id Deleted by user id.
     */
    deleteCourse(obj) {
        if (!obj.course_id || !obj.deleted_by_user_id) {
            throw new Error('For deleting course object has to have course_id and deleted_by_user_id');
        }
        return this._request('POST', `deletecourse`, obj);
    }

    /**
     * Add User To Course
     * @param obj The insertion object.
     * @param obj.course_id The id of the course.
     * @param obj.user_id The id of the user.
     * @param {Enumerator} obj.role The role of the user in the course. 
     */
    addUserToCourse(obj) {
        if (!obj.user_id || !obj.course_id || !obj.role) {
            throw new Error('For deleting course object has to have user_id and course_id and role');
        }
        return this._request('POST', `addusertocourse`, obj);
    }

    /**
     * Remove User From Course
     * @param courseId The id of the course.
     * @param userId The id of the user.
     */
    removeUserFromCourse(courseId, userId) {
        return this._request('GET', `removeuserfromcourse/user_id:${userId},course_id:${courseId}`);
    }

    /**
     * Go With User To Course
     * @param courseId The id of the course.
     * @param userId The id of the user.
     */
    goToCourse(courseId, userId) {
        return this._request('GET', `gotocourse/user_id:${userId},course_id:${courseId}`);
    }

    /**
     * Go User By Custom Field
     */
    getCoursesByCustomField(fieldValue) {
        return this._request('GET', `getcoursesbycustomfield/custom_field_value:${fieldValue}`);
    }

    /**
     * @param obj The insertion object.
     * @param obj.course_id The id of the course.
     * @param obj.user_id The id of the user.
     * @param obj.coupon coupon.
     */
    buyCourse(obj) {
        if (!obj.userId || !obj.courseId) {
            throw new Error('Branch has to have name and description');
        }
        return this._request('POST', `buycourseCourses`, obj);
    }

    /**
     * Go Custom Field
     */
    getCustomCourseFields() {
        return this._request('GET', `getcustomcoursefields`);
    }
    
    /**
     * Get Test Answers For Course
     * @param testId The id of the test.
     * @param userId The id of the user.
     */
    getTestAnswers(testId, userId) {
        return this._request('GET', `gettestanswers/test_id:${testId},user_id:${userId}`);
    }

    /**
     * Get Test Answers For Course
     * @param surveyId The id of the survey.
     * @param userId The id of the user.
     */
    getSurveyAnswers(surveyId, userId) {
        return this._request('GET', `getsurveyanswers/survey_id:${surveyId},user_id:${userId}`);
    }

    /**
     * Get ILT Sessions
     * @param iltId The id of the ITL
     */
    getILTSessions(iltId) {
        return this._request('GET', `getiltsessions/getiltsessions:${iltId}`);
    }
}

module.exports = Courses;