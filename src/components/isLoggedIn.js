
// const checkToken = sessionStorage.getItem("token");
// Use is deprecated in favor of useContext
const isLoggedIn  = () => {
    if(sessionStorage.getItem('token') &&  sessionStorage.getItem('token') !== "" && sessionStorage.getItem('token') !== undefined) {
        return true;
    }
    
    return false;
}

export default isLoggedIn;