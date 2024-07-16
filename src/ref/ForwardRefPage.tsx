import React, {forwardRef, useRef} from "react";


/**
 * Accessing Child Component's DOM Node
 * @constructor
 */
export const ForwardRefPage: React.FC = () => {

    return (<div>
        <ParentComponent/>
    </div>)
}

// Child component using forwardRef
const CustomInput
    = forwardRef<HTMLInputElement, {label: string}>(({label}, ref)=>{
        return (
            <div>
                <label>{label}</label>
                <input ref={ref} type={"text"}/>
            </div>
        )
})

// Parent component
const ParentComponent: React.FC = () => {
    const inputRef = useRef<HTMLInputElement>(null)

    const focusInput = () => {
        if(inputRef.current){
            inputRef.current.focus()
        }
    }

    return (
        <div>
            <CustomInput label={"Name:"} ref={inputRef}/>
            <button onClick={focusInput}>Focus Input</button>
        </div>
    )
}