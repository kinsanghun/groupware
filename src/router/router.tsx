import Calendar from "pages/Calendar";
import Login from "pages/common/Login";
import Mail from "pages/Mail";
import Main from "pages/Main";
import NotFound from "pages/NotFound";
import Root from "pages/Root";
import WorkOutManage from "pages/WorkOutManage";
import React from "react";

type routeType = {
    [key:string]:JSX.Element
}
export const Router = (props:{URL:string}):JSX.Element => {
    const RouteTable:routeType = {
        "/" : <Root/>,
        "/home" : <Main/>,
        "/login" : <Login/>,
        "/calendar" : <Calendar/>,
        "/mail" : <Mail/>,
        "/workoutmanage" : <WorkOutManage/>,
    }
    return props.URL in RouteTable ? RouteTable[props.URL] : <NotFound/>
}