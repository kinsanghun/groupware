import { MenuContext } from "App";
import Calendar from "pages/Calendar";
import Join from "pages/common/Join";
import Login from "pages/common/Login";
import MyPage from "pages/common/MyPage";
import Mail from "pages/Mail";
import Main from "pages/Main";
import NotFound from "pages/NotFound";
import Root from "pages/Root";
import WorkOutManage from "pages/WorkOutManage";
import { useContext } from "react";

type routeType = {
    [key:string]:JSX.Element
}
export const Router = (props:{URL:string}):JSX.Element => {
    const RouteTable:routeType = {
        "/" : <Root/>,
        "/home" : <Main/>,
        "/mypage" : <MyPage/>,
        "/join" : <Join/>,
        "/login" : <Login/>,
        "/calendar" : <Calendar/>,
        "/mail" : <Mail/>,
        "/workoutmanage" : <WorkOutManage/>,
    }

    const context = useContext(MenuContext);
    const allowURLs = [
        "/", 
        "/login", 
        "/loin"
    ];
    const noGroupAllowList = [
        "/",
        "/mypage",
        "/home"
    ]
    const accessToken = sessionStorage.getItem("access-token");

    if(accessToken) {
        const info = JSON.parse(accessToken);
        if(info.group) {
            return props.URL in RouteTable ? RouteTable[props.URL] : <NotFound/>
        }
        else {
            if(!noGroupAllowList.includes(props.URL)) {
                alert("먼저 그룹에 가입해주세요.");
                return RouteTable["/home"];
            }else {
                return props.URL in RouteTable ? RouteTable[props.URL] : <NotFound/>
            }
        }
        
    }
    else {
        if(allowURLs.includes(props.URL)) {
            return props.URL in RouteTable ? RouteTable[props.URL] : <NotFound/>
        }
        else {
            context.viewHandler("/login");
            return <Login/>;
        }
    }
}