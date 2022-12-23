import { memo } from "react";
import menus from "assets/json/menuList.json";
import { MenuItem } from "components/Menu";
const Navigation = ():JSX.Element => {

    const menuList:JSX.Element[] = menus.menuList.map(menu => <MenuItem key={menu.id} data={menu} />);
    return (<nav><ul>{menuList}</ul></nav>)

}

const Header = ():JSX.Element => {
    return (
        <header>
            <Navigation/>
        </header>
    )
}

export default memo(Header);