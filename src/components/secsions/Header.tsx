import { memo, useContext } from "react";
import menus from "assets/json/menuList.json";
import { MenuItem } from "components/Menu";
import { MenuContext } from "App";
import { InfuseExampleAccessToken, Logout } from "api/LoginAPI";

export const Navigation = ():JSX.Element => {
    const menuList:JSX.Element[] = menus.menuList.map(menu => <MenuItem key={menu.id} data={menu} />);
    return (<nav>{menuList}</nav>)

}

const Header = ():JSX.Element => {
    const context = useContext(MenuContext);
    const accessToken = sessionStorage.getItem("access-token");
    return (
        <header>
            <div className="container">
                <h2 onClick={()=>{context.viewHandler("/")}}>GROUP<span>WARE</span></h2>
                <ul>
                    {
                        accessToken ?
                        <li onClick={()=>{Logout(context)}}>LOGOUT</li> :
                        <>
                            <li onClick={()=>{InfuseExampleAccessToken(context)}}>EXAMPLE LOGIN</li>
                            <li onClick={()=>{context.viewHandler("/login")}}>LOGIN</li>
                        </>
                    }
                </ul>
            </div>
        </header>
    )
}

export default memo(Header);