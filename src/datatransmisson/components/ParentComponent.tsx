import React, {useState} from "react";
import {ChildToParent} from "./ChildToParent";

export const ParentComponent: React.FC = () => {
    const [message, setMessage] = useState("")

    const handleMessageChange = (newMessage: string) => {
        setMessage(newMessage)
    }

    return (<div className={"p-4 border rounded bg-yellow-200"}>
        <p>Message from child: {message}</p>
        <ChildToParent onMessageChange={handleMessageChange}/>
    </div>)
}