import React from "react";

interface EventComponentProps{
    onButtonClick: (message: string) => void
}

export const EventComponent: React.FC<EventComponentProps> = ({onButtonClick}) => {

    return (<div className={"p-4 border rounded bg-green-200"}>
        <button
            className={"px-4 py-2 bg-green-600 text-white rounded"}
            onClick={() => onButtonClick("Button clicked")}>
            Click Me
        </button>
    </div>)
}