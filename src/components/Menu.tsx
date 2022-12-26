import { useContext } from "react";
import { navIconType, navType } from "types/menu";
import { MenuContext } from "App";
import {
    BiHome,
    BiEnvelope,
    BiCabinet,
    BiCalendar,
    BiQrScan
} from 'react-icons/bi';
import { IsLogin } from "api/LoginAPI";

export const MenuItem = (props: { data: navType }) => {
    const context = useContext(MenuContext);
    const menuIcons:navIconType = {
        BiHome : <BiHome/>,
        BiEnvelope : <BiEnvelope/>,
        BiCabinet : <BiCabinet/>,
        BiCalendar : <BiCalendar/>,
        BiQrScan : <BiQrScan/>
    }

    return (
        <>
            <div 
                className={context.view === props.data.url ? "active" : ""} 
                onClick={() => { 
                    !IsLogin(context) ? 
                    context.viewHandler(props.data.url) : 
                    context.viewHandler("/login")
                }}>
                {menuIcons[props.data.icon]}
                
            </div>
            <div className="tag">{props.data.title}</div>
        </>
    )
}