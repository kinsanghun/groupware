import { groupType } from "types/group";
import JoinGroup from "./JoinGroup";
import 'styles/pages/main.scss';
import JoinedGroup from "./JoinedGroup";
const Main = () => {
    const accessToken = sessionStorage.getItem("access-token");

    let loginInfo:groupType = {
        name : "",
        group : null,
        token : "",
    }

    if(accessToken) {
        const parse = JSON.parse(accessToken);
        loginInfo = {...parse};
    }

    return (
        <div className="container">
            <h1>Home</h1>
            {loginInfo.group ? <JoinedGroup groupName={loginInfo.group}/> : <JoinGroup/>}
        </div>
    )
}

export default Main;