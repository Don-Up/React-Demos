import React, {useRef} from "react";
import {ChildComponent} from "./components/ChildComponent";
import {EventComponent} from "./components/EventComponent";
import {ParentComponent} from "./components/ParentComponent";
import {UserCard} from "./components/UserCard";
import {UseCallbackPage} from "../callback/UseCallbackPage";
import {DataProvider} from "./components/DataProvider";
import ForwardedComponent from "./components/ForwardedComponent";

export const DataTransPage: React.FC = () => {
    const handleEvent = (message: string) => {
        alert(message)
    }

    const user = {
        name: "John Doe",
        age: 30,
        email: "john.doe@example.com",
    };

    const forwardedRef = useRef<HTMLDivElement>(null);

    return (
        <div className={"p-5"}>
            <h2 className={"text-2xl font-bold mb-5"}>Props Demo</h2>

            <div className={"mb-5"}>
                <h3 className={"text-xl font-semibold"}>Setting Default Props</h3>
                <ChildComponent/>
            </div>

            <div className={"mb-5"}>
                <h3 className={"text-xl font-semibold"}>Passing Children and Other Props</h3>
                <ChildComponent color={"blue"}>
                    <p>This is a child element.</p>
                </ChildComponent>
            </div>

            <div className={"mb-5"}>
                <h3 className={"text-xl font-semibold"}>Passing Event Handlers as Props</h3>
                <EventComponent onButtonClick={handleEvent}/>
            </div>

            <div className={"mb-5"}>
                <h3 className={"text-xl font-semibold"}>Passing Data from Child to Parent</h3>
                <ParentComponent/>
            </div>

            <div className={"mb-5"}>
                <h3 className={"text-xl font-semibold"}>Passing Multiple Props with Spread Operator</h3>
                {/*<UserCard name={user.name} age={user.age} email={user.email}/>*/}
                <UserCard {...user}/>
            </div>

            <div className="mb-5">
                <h3 className="text-xl font-semibold">Render Props (Pass JSX)</h3>
                <DataProvider
                    render={(data) => (
                        <div className="p-4 border rounded bg-teal-200">
                            <h3 className="text-lg font-semibold">Render Props Data</h3>
                            <p><strong>Data:</strong> {data}</p>
                        </div>
                    )}
                />
            </div>

            <div className="mb-5">
                <h3 className="text-xl font-semibold">Forward and Merge className Props</h3>
                {/* eslint-disable-next-line react/jsx-no-undef */}
                <ForwardedComponent ref={forwardedRef} className="bg-purple-200 font-bold">
                    <p>This component demonstrates forwarding refs and merging class names.</p>
                </ForwardedComponent>
            </div>

        </div>)
}