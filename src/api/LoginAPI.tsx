export const Authentication = () => {

}

export const LoginProcess = () => {
    return;
}

export const IsLogin = (context:{view:string, viewHandler:Function}) => {
    const allowURLs = [
        "/login",
        "/",
    ]

    if(!allowURLs.includes(context.view)) {
        const accessToken = sessionStorage.getItem("access-token");
        console.log(accessToken);
        if(!accessToken) { return true; }
    }
    return false;
}

export const Logout = (context:{view:string, viewHandler:Function}) => {
    sessionStorage.removeItem("access-token");
    alert("Logout Complete");
    context.viewHandler("/login");
}

export const InfuseExampleAccessToken = (context:{view:string, viewHandler:Function}) => {
    sessionStorage.setItem("access-token", "exmple-token");
    alert("Login Complete");
    context.viewHandler("/home");
}