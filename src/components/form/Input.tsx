import React from "react"
import 'styles/components/input.scss';

export const TextInput = (props:{ref:React.MutableRefObject<HTMLInputElement | null>, label:string}) => {
    return (
        <div className="sh-input">
            <input type="text" ref={props.ref}/>
            <label>{props.label}</label>
        </div>
    )
}
export const PasswordInput = (props:{ref:React.MutableRefObject<HTMLInputElement | null>, label:string}) => {
    return (
        <div className="sh-input">
            <input type="password" ref={props.ref} autoComplete="false"/>
            <label>{props.label}</label>
        </div>
    )
}

export const SubmitButton = (props:{value:string}) => {
    return (
        <div className="sh-input">
            <input type="submit" value={props.value}/>
        </div>
    )
}