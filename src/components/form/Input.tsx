import React, { forwardRef, PropsWithChildren } from "react"
import 'styles/components/input.scss';

type Props = {
    label : string
}
export const TextInput = forwardRef<HTMLInputElement, Props>((props:PropsWithChildren<Props>, ref:React.Ref<HTMLInputElement>) => {
    return (
        <div className="sh-input">
            <input type="text" ref={ref}/>
            <label>{props.label}</label>
        </div>
    )
})
export const PasswordInput = forwardRef<HTMLInputElement, Props>((props:PropsWithChildren<Props>, ref:React.Ref<HTMLInputElement>) => {
    return (
        <div className="sh-input">
            <input type="password" ref={ref} autoComplete="false"/>
            <label>{props.label}</label>
        </div>
    )
})

export const SubmitButton = (props:{value:string}) => {
    return (
        <div className="sh-input">
            <input type="submit" value={props.value}/>
        </div>
    )
}