import Calendar from "pages/Calendar";
import Mail from "pages/Mail";
import Main from "pages/Main";
import NotFound from "pages/NotFound";
import WorkOutManage from "pages/WorkOutManage";
import React from "react";

type routeType = {
    [key:string]:JSX.Element
}
export const Router = (props:{URL:string}):JSX.Element => {
    const RouteTable:routeType = {
        "/" : <Main/>,
        "/calendar" : <Calendar/>,
        "/mail" : <Mail/>,
        "/workoutmanage" : <WorkOutManage/>,
    }
    return props.URL in RouteTable ? RouteTable[props.URL] : <NotFound/>
}