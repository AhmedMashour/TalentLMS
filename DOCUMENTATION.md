# talentlms *1.0.0*



### TalentLMS/branches.js


#### getBranches() 

Get Branches






##### Returns


- `Void`



#### getBranch(branchId) 

Get Branch




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| branchId | `String`  | the id of the wanted branch | &nbsp; |




##### Returns


- `Void`



#### createBranch(obj) 

Create Branch




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| obj |  | The insertion object. | &nbsp; |
| obj.name |  | The name of the branch. | &nbsp; |
| obj.description |  | The Description of the branch. | &nbsp; |




##### Returns


- `Void`



#### deleteBranch(obj) 

Delete Branch




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| obj |  | The object. | &nbsp; |
| obj.branch_id |  | The id of the branch. | &nbsp; |
| obj.deleted_by_user_id |  | Deleted by user id. | &nbsp; |




##### Returns


- `Void`



#### branchSetStatus(branchId, status) 

Change the status (active or inactive) of a branch




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| branchId | `String`  | the id of the wanted branch | &nbsp; |
| status | `String`  | [active, inactive] | &nbsp; |




##### Returns


- `Void`



#### addUsertoBranch(branchId, userId) 

Add a user to a branch




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| branchId | `String`  | the id of the wanted branch | &nbsp; |
| userId | `String`  | id of the user | &nbsp; |




##### Returns


- `Void`



#### addCoursetoBranch(branchId, courseId) 

Add a course to a branch




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| branchId | `String`  | the id of the wanted branch | &nbsp; |
| courseId | `String`  | id of the course | &nbsp; |




##### Returns


- `Void`




### TalentLMS/categories.js


#### getCategories() 

Get Categories






##### Returns


- `Void`



#### getCategory(categoryId) 

Get Category




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| categoryId | `String`  | the id of the wanted category | &nbsp; |




##### Returns


- `Void`



#### buyCategoryCourses(obj) 

Buy Category Course meaning to get paypal link for user to buy category




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| obj |  | The insertion object. | &nbsp; |
| obj.user_id |  | The name of the course. | &nbsp; |
| obj.category_id |  | The Description of the user. | &nbsp; |
| obj.coupon |  | coupon. | &nbsp; |




##### Returns


- `Void`



#### categoryLeafsAndCourses(categoryId) 

Get Category Leafs And Courses




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| categoryId | `String`  |  | &nbsp; |




##### Returns


- `Void`




### TalentLMS/courses.js


#### getCourses() 

Get Courses






##### Returns


- `Void`



#### getCourse(courseId) 

Get Course




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| courseId | `String`  |  | &nbsp; |




##### Returns


- `Void`



#### getUserStatusInCourse(courseId) 

Get User Status In Course




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| courseId | `String`  | the id of the wanted course | &nbsp; |




##### Returns


- `Void`



#### createCourse(obj) 

Add User To Course




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| obj |  | The insertion object. | &nbsp; |
| obj.name |  | The name of the course. | &nbsp; |
| obj.description |  | The Description of the course. | &nbsp; |
| obj.code |  | course code. | &nbsp; |




##### Returns


- `Void`



#### deleteCourse(obj) 

Delete a Course




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| obj |  | The insertion object. | &nbsp; |
| obj.course_id |  | The name of the course. | &nbsp; |
| obj.deleted_by_user_id |  | Deleted by user id. | &nbsp; |




##### Returns


- `Void`



#### addUserToCourse(obj) 

Add User To Course




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| obj |  | The insertion object. | &nbsp; |
| obj.course_id |  | The id of the course. | &nbsp; |
| obj.user_id |  | The id of the user. | &nbsp; |
| obj.role | `Enumerator`  | The role of the user in the course. | &nbsp; |




##### Returns


- `Void`



#### removeUserFromCourse(courseId, userId) 

Remove User From Course




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| courseId |  | The id of the course. | &nbsp; |
| userId |  | The id of the user. | &nbsp; |




##### Returns


- `Void`



#### goToCourse(courseId, userId) 

Go With User To Course




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| courseId |  | The id of the course. | &nbsp; |
| userId |  | The id of the user. | &nbsp; |




##### Returns


- `Void`



#### getCoursesByCustomField() 

Go User By Custom Field






##### Returns


- `Void`



#### buyCourse(obj) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| obj |  | The insertion object. | &nbsp; |
| obj.course_id |  | The id of the course. | &nbsp; |
| obj.user_id |  | The id of the user. | &nbsp; |
| obj.coupon |  | coupon. | &nbsp; |




##### Returns


- `Void`



#### getCustomCourseFields() 

Go Custom Field






##### Returns


- `Void`



#### getTestAnswers(testId, userId) 

Get Test Answers For Course




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| testId |  | The id of the test. | &nbsp; |
| userId |  | The id of the user. | &nbsp; |




##### Returns


- `Void`



#### getSurveyAnswers(surveyId, userId) 

Get Test Answers For Course




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| surveyId |  | The id of the survey. | &nbsp; |
| userId |  | The id of the user. | &nbsp; |




##### Returns


- `Void`



#### getILTSessions(iltId) 

Get ILT Sessions




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| iltId |  | The id of the ITL | &nbsp; |




##### Returns


- `Void`




### TalentLMS/groups.js


#### getGroups() 

Get Groups






##### Returns


- `Void`



#### getGroup(groupId) 

Get Group




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| groupId | `String`  |  | &nbsp; |




##### Returns


- `Void`



#### createGroup(obj) 

Add User To Group




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| obj |  | The insertion object. | &nbsp; |
| obj.name |  | The name of the group. | &nbsp; |
| obj.description |  | The Description of the group. | &nbsp; |
| obj.key |  | group code. | &nbsp; |
| obj.price |  | group price | &nbsp; |
| ob.creator_id |  | creator id | &nbsp; |




##### Returns


- `Void`



#### deleteGroup(obj) 

Delete a Group




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| obj |  | The insertion object. | &nbsp; |
| obj.group_id |  | The name of the group. | &nbsp; |
| obj.deleted_by_user_id |  | Deleted by user id. | &nbsp; |




##### Returns


- `Void`



#### addUserToGroup(userId, groupKey) 

Add User To Group




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| userId |  | The id of the user object. | &nbsp; |
| groupKey |  | The key of the group. | &nbsp; |




##### Returns


- `Void`



#### removeUserFromGroup(groupId, userId) 

Remove User From Group




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| groupId |  | The id of the group. | &nbsp; |
| userId |  | The id of the user. | &nbsp; |




##### Returns


- `Void`



#### addCourseToGroup(groupId, courseId) 

Add Course To Group




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| groupId |  | The id of the group. | &nbsp; |
| courseId |  | The id of the course. | &nbsp; |




##### Returns


- `Void`




### TalentLMS/system.js


#### getSiteInfo() 

Get System Info






##### Returns


- `Void`



#### getRateLimit() 

Get Rate Limit






##### Returns


- `Void`



#### getTimeLine(obj) 

Get TimeLine




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| obj |  | The object. | &nbsp; |
| obj.event_type |  | Event Type. | &nbsp; |




##### Returns


- `Void`




### TalentLMS/users.js


#### getUsers() 

Get Users






##### Returns


- `Void`



#### getUser(userId) 

Get User By Id




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| userId | `String`  |  | &nbsp; |




##### Returns


- `Void`



#### getUser(userEmail) 

Get User By Email




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| userEmail | `String`  |  | &nbsp; |




##### Returns


- `Void`



#### setStatus(userId, status) 

Change the status (active or inactive) of a user




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| userId | `String`  | user id | &nbsp; |
| status | `status`  | (active or inactive) | &nbsp; |




##### Returns


- `Void`



#### userSignup(obj) 

Sign up a user




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| obj |  | The insertion object. | &nbsp; |
| obj.first_name |  | User first name. | &nbsp; |
| obj.last_name |  | User last name. | &nbsp; |
| obj.email |  | User email. | &nbsp; |
| obj.login |  | User username | &nbsp; |
| obj.password |  | User password | &nbsp; |




##### Returns


- `Void`



#### editUser(obj) 

Edit a user




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| obj |  | The insertion object. | &nbsp; |
| obj.user_id |  | User id. | &nbsp; |
| obj.first_name |  | User first name. | &nbsp; |
| obj.last_name |  | User last name. | &nbsp; |
| obj.email |  | User email. | &nbsp; |
| obj.login |  | User username | &nbsp; |
| obj.password |  | User password | &nbsp; |
| obj.bio |  | User bio | &nbsp; |
| obj.timezone |  | User timezone | &nbsp; |




##### Returns


- `Void`



#### deleteUser(obj) 

Delet a User




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| obj |  | The insertion object. | &nbsp; |
| obj.user_id |  | User id. | &nbsp; |
| obj.deleted_by_user_id |  | Deleted by user id | &nbsp; |




##### Returns


- `Void`



#### getUsersByCustomField(fieldValue) 

Get Users By Custom Field




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| fieldValue |  | Field Value i.e: test | &nbsp; |




##### Returns


- `Void`



#### getUsersProgressInUnits(userId, unitId) 

Get User Progress in units




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| userId |  | The id of the user | &nbsp; |
| unitId |  | The id of the unit | &nbsp; |




##### Returns


- `Void`



#### editUserCustomFields(obj) 

Edit User Custom Field




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| obj |  | The insertion object. | &nbsp; |
| obj.user_id |  | User id. | &nbsp; |
| obj.first_name |  | User first name. | &nbsp; |
| obj.last_name |  | User last name. | &nbsp; |
| obj.email |  | User email. | &nbsp; |
| obj.login |  | User username | &nbsp; |
| obj.password |  | User password | &nbsp; |
| obj.bio |  | User bio | &nbsp; |
| obj.timezone |  | User timezone | &nbsp; |




##### Returns


- `Void`



#### userLogin(obj) 

Login a User




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| obj |  | The insertion object. | &nbsp; |
| obj.login |  | The name of the user. | &nbsp; |
| obj.password |  | password. | &nbsp; |
| obj.logout_redirect |  | Logout redirect. | &nbsp; |




##### Returns


- `Void`



#### userLogout(obj) 

Logout a User




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| obj |  | The insertion object. | &nbsp; |
| obj.user_id |  | The id of the user. | &nbsp; |
| obj.next |  | next url example.com. | &nbsp; |




##### Returns


- `Void`



#### getCustomRegistrationFields() 

Get custom registration fields






##### Returns


- `Void`



#### forgotUsername(userEmail) 

Forgot username routine and send username to email




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| userEmail |  | The email of the user | &nbsp; |




##### Returns


- `Void`



#### forgotPassword(username) 

Forgot password routine and send reset password to email




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| username |  | The username of the user | &nbsp; |




##### Returns


- `Void`




*Documentation generated with [doxdox](https://github.com/neogeek/doxdox).*
