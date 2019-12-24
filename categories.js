request = require('./lib/request');

class Categories {
    constructor(hostname, token) {
        this.hostname = hostname;
        this.token = token;
        this._request = request;
    }

    /**
     * Get Categories
     */
    getCategories() {
        return this._request('GET', `categories`);
    }

    /**
     * Get Category
     * @param {String} categoryId the id of the wanted category
     */
    getCategory(categoryId) {
        return this._request('GET', `categories/id:${categoryId}`);
    }

    /**
     * Buy Category Course meaning to get paypal link for user to buy category
     * @param obj The insertion object.
     * @param obj.user_id The name of the course.
     * @param obj.category_id The Description of the user.
     * @param obj.coupon coupon. 
     */
    buyCategoryCourses(obj) {
        if (!obj.user_id || !obj.category_id) {
            throw new Error('To buy courses object has to have user and category id');
        }
        return this._request('POST', `buycategorycourses`, obj);
    }

    /**
     * Get Category Leafs And Courses
     * @param {String} categoryId
     */
    categoryLeafsAndCourses(categoryId) {
        return this._request('GET', `categoryleafsandcourses/id:${categoryId}`);
    }
}

module.exports = Categories;