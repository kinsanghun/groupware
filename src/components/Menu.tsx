import { useState } from "react";
import { navType } from "types/menu";
import { IoMdArrowDropright } from "react-icons/io";
import { BsDot } from "react-icons/bs";
export const MenuItem = (props: { data: navType }) => {

    const [menuToggle, setMenuToggle] = useState(false);
    const subItem: JSX.Element[] = props.data.subMenu.map(menu => <MenuItem key={menu.id} data={menu} />);

    return (
        <li>
            <div onClick={() => { if (subItem.length > 0) setMenuToggle(prev => !prev) }}>

                <span className={menuToggle ? "arrow active" : "arrow"}>
                    {
                        subItem.length > 0 ?
                        <IoMdArrowDropright />
                        : <BsDot />
                    }
                </span>
                {props.data.title}
            </div>
            {menuToggle && subItem.length > 0 ? <ul>{subItem}</ul> : null}
        </li>
    )
}