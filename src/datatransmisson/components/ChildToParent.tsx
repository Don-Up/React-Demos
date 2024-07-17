import React from "react";

interface ChildToParentProps{
    onMessageChange: (message: string) => void
}

export const ChildToParent: React.FC<ChildToParentProps> = ({onMessageChange}) => {

    return (<div className={"p-4 border rounded bg-yellow-400"}>
        <button
            className={"px-4 py-2 bg-yellow-600 text-white rounded"}
            onClick={() => onMessageChange("Hello from child!")}
            >
            Send Message to Parent
        </button>
    </div>)
}