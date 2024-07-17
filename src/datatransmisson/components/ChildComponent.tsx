import React from "react";

interface ChildComponentProps{
    color?: string
    children?: React.ReactNode
}

export const ChildComponent: React.FC<ChildComponentProps> = ({color = "red", children}) => {

    return (<div className={`p-4 border rounded ${color==="red"?"bg-red-200":"bg-blue-200"}`}>
        <p>This component has a {color} background.</p>
        {children}
    </div>)
}