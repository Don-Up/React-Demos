import React, {forwardRef, useImperativeHandle, useRef} from "react";

/**
 * Using `forwardRef` with `useImperativeHandle`
 * @constructor
 */
export const ForwardRefPage1: React.FC = () => {

    const customInputRef = useRef<CustomInputMethods>(null)

    return (<div>
        <CustomInput ref={customInputRef}/>
        <button onClick={() => customInputRef.current?.focus()}>Focus Input</button>
        <button onClick={() => customInputRef.current?.clear()}>Clear Input</button>
    </div>)
}

interface CustomInputMethods{
    focus: () => void
    clear: () => void
}

const CustomInput
    = forwardRef<CustomInputMethods, {}>(({}, ref)=> {
        const inputRef = useRef<HTMLInputElement>(null)

        useImperativeHandle(ref, () => ({
            focus: () => {
                if(inputRef.current){
                    inputRef.current.focus()
                }
            },
            clear: () => {
                if(inputRef.current){
                    inputRef.current.value=""
                }
            }
        }))

        return (
            <div><input ref={inputRef} type={"text"} placeholder={"input something..."}/></div>
        )
})
