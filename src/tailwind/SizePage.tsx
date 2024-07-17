import React from "react";

export const SizePage: React.FC = () => {
    
    return (<div className={"p-6"}>
        <h1 className="text-2xl font-bold mb-4">Width and Height Examples with Tailwind CSS</h1>

        {/* Width Examples */}
        <div className="mb-4">
            <div className="bg-blue-500 text-white p-2 mb-2 w-1/4">Width 1/4 (w-1/4)</div>
            <div className="bg-green-500 text-white p-2 mb-2 w-1/2">Width 1/2 (w-1/2)</div>
            <div className="bg-red-500 text-white p-2 mb-2 w-3/4">Width 3/4 (w-3/4)</div>
            <div className="bg-purple-500 text-white p-2 mb-2 w-full">Width Full (w-full)</div>
            <div className="bg-yellow-500 text-white p-2 mb-2 w-16">Width 16 (w-16)</div>
            <div className="bg-indigo-500 text-white p-2 mb-2 w-32">Width 32 (w-32)</div>
            <div className="bg-pink-500 text-white p-2 mb-2 w-auto">Width Auto (w-auto)</div>
        </div>

        {/* Height Examples */}
        <div className="mb-4">
            <div className="bg-blue-500 text-white mb-2 h-16">Height 16 (h-16)</div>
            <div className="bg-green-500 text-white mb-2 h-32">Height 32 (h-32)</div>
            <div className="bg-red-500 text-white mb-2 h-48">Height 48 (h-48)</div>
            <div className="bg-purple-500 text-white mb-2 h-64">Height 64 (h-64)</div>
            <div className="bg-yellow-500 text-white mb-2 h-96">Height 96 (h-96)</div>
            <div className="bg-indigo-500 text-white mb-2 h-auto">Height Auto (h-auto)</div>
            <div className="bg-pink-500 text-white mb-2 h-screen">Height Screen (h-screen)</div>
        </div>

        {/* Min Width and Min Height Examples */}
        <div className="mb-4">
            <div className="bg-blue-500 text-white mb-2 min-w-0">Min Width 0 (min-w-0)</div>
            <div className="bg-green-500 text-white mb-2 min-w-full">Min Width Full (min-w-full)</div>
            <div className="bg-red-500 text-white mb-2 min-h-0">Min Height 0 (min-h-0)</div>
            <div className="bg-purple-500 text-white mb-2 min-h-full">Min Height Full (min-h-full)</div>
        </div>

        {/* Max Width and Max Height Examples */}
        <div className="mb-4">
            <div className="bg-blue-500 text-white mb-2 max-w-xs">Max Width XS (max-w-xs)</div>
            <div className="bg-green-500 text-white mb-2 max-w-sm">Max Width SM (max-w-sm)</div>
            <div className="bg-red-500 text-white mb-2 max-w-md">Max Width MD (max-w-md)</div>
            <div className="bg-purple-500 text-white mb-2 max-w-lg">Max Width LG (max-w-lg)</div>
            <div className="bg-yellow-500 text-white mb-2 max-w-xl">Max Width XL (max-w-xl)</div>
            <div className="bg-indigo-500 text-white mb-2 max-w-2xl">Max Width 2XL (max-w-2xl)</div>
            <div className="bg-pink-500 text-white mb-2 max-w-4xl">Max Width 4XL (max-w-4xl)</div>
            <div className="bg-blue-500 text-white mb-2 max-w-full">Max Width Full (max-w-full)</div>
        </div>
    </div>)
}