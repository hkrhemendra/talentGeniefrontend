
// const apiUrl = `http://127.0.0.1:8000/api/v1/`;
const apiUrl = `http://3.7.254.1/api/v1/`;

// Post METHOD API's
const signUpData = apiUrl + `sign-up`;

const loginData = apiUrl + `login`;

const userProfile = apiUrl + `get-profile`;

// Homepage
// top categories
const topCategoriesUrl = apiUrl +`homepage/categories`;
// top courses
const topCoursesUrl = apiUrl +`homepage/top_courses`;
// free courses
const freeCoursesUrl = apiUrl + `homepage/free_courses`;
// get teachers
const teachersUrl = apiUrl +`get-teachers`;

// competetions
// get competition
const competitionUrl = apiUrl + `get-upcoming-competitions`;

// courses
const coursesUrl = apiUrl +`get-courses/`;
const batchUrl = apiUrl + `batch-details/`;

// competetions 
const compDetail = apiUrl + `get-competitions-details/`;


//getting all the images
const imageUrl = apiUrl + `get-poster-picture/`


export default apiUrl;
export { signUpData, loginData, userProfile, topCategoriesUrl, topCoursesUrl, freeCoursesUrl, teachersUrl,competitionUrl, coursesUrl, batchUrl, compDetail, imageUrl };
