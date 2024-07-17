import React from "react";

export const FlexPage: React.FC = () => {

    return (<div className={"p-6"}>
        <h1 className={"text-2xl font-bold mb-4"}>Flexbox Examples with Tailwind CSS</h1>

        {/*Container with flex*/}
        <div className={"flex bg-gray-200 p-4 mb-4"}>
            <div className={"bg-blue-500 text-white p-4 mr-4"}>Item1</div>
            <div className={"bg-green-400 text-white p-4 mr-4"}>Item2</div>
            <div className={"bg-red-500 text-white p-4"}>Item3</div>
        </div>

        {/*Container with justify-center*/}
        <div className={"flex justify-center bg-gray-200 p-4 mb-4"}>
            <div className={"bg-blue-500 text-white p-4 mr-4"}>Item1</div>
            <div className={"bg-green-400 text-white p-4 mr-4"}>Item2</div>
            <div className={"bg-red-500 text-white p-4"}>Item3</div>
        </div>

        {/*Container with justify-between*/}
        <div className={"flex justify-between bg-gray-200 p-4 mb-4"}>
            <div className={"bg-blue-500 text-white p-4 mr-4"}>Item1</div>
            <div className={"bg-green-400 text-white p-4 mr-4"}>Item2</div>
            <div className={"bg-red-500 text-white p-4"}>Item3</div>
        </div>

        {/* Container with align-items-center */}
        <div className="flex items-center bg-gray-200 p-4 mb-4 h-[200px]">
            <div className="bg-blue-500 text-white p-4 mr-4">Item 1</div>
            <div className="bg-green-500 text-white p-4 mr-4">Item 2</div>
            <div className="bg-red-500 text-white p-4">Item 3</div>
        </div>

        {/* Container with flex-column */}
        <div className="flex flex-col bg-gray-200 p-4 mb-4">
            <div className="bg-blue-500 text-white p-4 mb-4">Item 1</div>
            <div className="bg-green-500 text-white p-4 mb-4">Item 2</div>
            <div className="bg-red-500 text-white p-4">Item 3</div>
        </div>

        {/* Container with flex-wrap */}
        <div className="flex flex-wrap bg-gray-200 p-4 mb-4">
            <div className="bg-blue-500 text-white p-4 m-2" style={{width: '150px'}}>Item 1</div>
            <div className="bg-green-500 text-white p-4 m-2" style={{width: '150px'}}>Item 2</div>
            <div className="bg-red-500 text-white p-4 m-2" style={{width: '250px'}}>Item 3</div>
            <div className="bg-purple-500 text-white p-4 m-2" style={{width: '100px'}}>Item 4</div>
            <div className="bg-blue-500 text-white p-4 m-2" style={{width: '100px'}}>Item 1</div>
            <div className="bg-green-500 text-white p-4 m-2" style={{width: '150px'}}>Item 2</div>
            <div className="bg-red-500 text-white p-4 m-2" style={{width: '150px'}}>Item 3</div>
            <div className="bg-purple-500 text-white p-4 m-2" style={{width: '150px'}}>Item 4</div>
        </div>

        {/* Container with flex-grow */}
        <div className="flex bg-gray-200 p-4 mb-4">
            <div className="bg-blue-500 text-white p-4 flex-grow mr-4">Item 1</div>
            <div className="bg-green-500 text-white p-4 flex-grow mr-4">Item 2</div>
            <div className="bg-red-500 text-white p-4 flex-grow">Item 3</div>
        </div>

        <div className="flex bg-gray-200 p-4">
            <div className="bg-blue-500 text-white p-4 flex-1 mr-4">Item 1</div>
            <div className="bg-green-500 text-white p-4 flex-[2] mr-4">Item 2</div>
            <div className="bg-red-500 text-white p-4 flex-1">Item 3</div>
        </div>
    </div>)
}