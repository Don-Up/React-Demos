import React from "react";

export const TextPage: React.FC = () => {
    
    return (<div className={"p-6"}>
        <h1 className={"text-2xl font-bold mb-4"}>Text and Font Examples with Tailwind CSS</h1>

        <div className={"mb-4"}>
            <p className={"text-xs"}>This is extra small text (text-xs).</p>
            <p className="text-sm">This is small text (text-sm).</p>
            <p className="text-base">This is base text (text-base).</p>
            <p className="text-lg">This is large text (text-lg).</p>
            <p className="text-xl">This is extra large text (text-xl).</p>
            <p className="text-2xl">This is 2xl text (text-2xl).</p>
            <p className="text-3xl">This is 3xl text (text-3xl).</p>
            <p className="text-4xl">This is 4xl text (text-4xl).</p>
        </div>

        {/* Font Weight Examples */}
        <div className="mb-4">
            <p className="font-thin">This is thin font weight (font-thin).</p>
            <p className="font-extralight">This is extra light font weight (font-extralight).</p>
            <p className="font-light">This is light font weight (font-light).</p>
            <p className="font-normal">This is normal font weight (font-normal).</p>
            <p className="font-medium">This is medium font weight (font-medium).</p>
            <p className="font-semibold">This is semi-bold font weight (font-semibold).</p>
            <p className="font-bold">This is bold font weight (font-bold).</p>
            <p className="font-extrabold">This is extra bold font weight (font-extrabold).</p>
            <p className="font-black">This is black font weight (font-black).</p>
        </div>

        {/* Font Style Examples */}
        <div className="mb-4">
            <p className="italic">This text is italic (italic).</p>
            <p className="not-italic">This text is not italic (not-italic).</p>
        </div>

        {/* Text Alignment Examples */}
        <div className="mb-4">
            <p className="text-left">This text is left aligned (text-left).</p>
            <p className="text-center">This text is center aligned (text-center).</p>
            <p className="text-right">This text is right aligned (text-right).</p>
            <p className="text-justify">This text is justified (text-justify).</p>
        </div>

        {/* Text Transform Examples */}
        <div className="mb-4">
            <p className="uppercase">This text is uppercase (uppercase).</p>
            <p className="lowercase">This text is lowercase (lowercase).</p>
            <p className="capitalize">This text is capitalized (capitalize).</p>
            <p className="normal-case">This text is normal case (normal-case).</p>
        </div>

        {/* Text Decoration Examples */}
        <div className="mb-4">
            <p className="underline">This text is underlined (underline).</p>
            <p className="line-through">This text has a line through it (line-through).</p>
            <p className="no-underline">This text has no underline (no-underline).</p>
        </div>

        {/* Text Color Examples */}
        <div className="mb-4">
            <p className="text-red-500">This text is red (text-red-500).</p>
            <p className="text-green-500">This text is green (text-green-500).</p>
            <p className="text-blue-500">This text is blue (text-blue-500).</p>
            <p className="text-yellow-500">This text is yellow (text-yellow-500).</p>
            <p className="text-purple-500">This text is purple (text-purple-500).</p>
            <p className="text-gray-500">This text is gray (text-gray-500).</p>
        </div>
    </div>)
}