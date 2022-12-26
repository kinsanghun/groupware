import { MenuContext } from "App"
import { useContext } from "react";
import 'styles/components/link.scss';

export const TextLink = (props:{URL:string, text:string}) => {
    const context = useContext(MenuContext);
    return (<span className="link" onClick={()=>{context.viewHandler(props.URL)}}>{props.text}</span>);
}