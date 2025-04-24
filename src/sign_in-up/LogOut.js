

export const Logout = () => {

    localStorage.removeItem("userName");
    localStorage.removeItem("id");
    localStorage.removeItem("type");

    window.location.replace("/");
    console.log(localStorage.getItem("userName"));
    console.log(localStorage.getItem("id"));
    console.log(localStorage.getItem("type"));
};
