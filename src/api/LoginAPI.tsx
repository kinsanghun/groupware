import { groupType } from "types/group";

export const accessTokenStorage = "access-token";

export const Authentication = () => {

}

export const LoginProcess = () => {
    return;
}

export const Logout = (context:{view:string, viewHandler:Function}) => {
    sessionStorage.removeItem("access-token");
    alert("Logout Complete");
    context.viewHandler("/login");
}

export const InfuseExampleAccessToken = (context:{view:string, viewHandler:Function}) => {
    const exampleToken:groupType = {
        name : "Mr. Hong",
        group : null,
        token : "example-token"
    }
    sessionStorage.setItem("access-token", JSON.stringify(exampleToken));
    alert("Login Complete");
    context.viewHandler("/home");
}