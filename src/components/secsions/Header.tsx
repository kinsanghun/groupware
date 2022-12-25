import { memo } from "react";
import menus from "assets/json/menuList.json";
import { MenuItem } from "components/Menu";

export const Navigation = ():JSX.Element => {
    const menuList:JSX.Element[] = menus.menuList.map(menu => <MenuItem key={menu.id} data={menu} />);
    return (<nav>{menuList}</nav>)

}

const Header = ():JSX.Element => {
    return (
        <header>
            <div className="container">
                <h2>GROUP<span>WARE</span></h2>
                <ul>
                    <li>HOME</li>
                    <li>MENU</li>
                    <li>CONTENT</li>
                    <li>INFO</li>
                </ul>
            </div>
        </header>
    )
}

export default memo(Header);