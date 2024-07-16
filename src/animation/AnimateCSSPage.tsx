import React from "react";
import 'animate.css';

export const AnimateCSSPage: React.FC = () => {
    return (
        <div className="p-8">
            <h1 className="text-4xl font-bold mb-4 animate__animated animate__bounce animate__repeat-1">
                AnimCSS
            </h1>

            <div className="space-y-8">
                {/* Example of bounce animation */}
                <div className="animate__animated animate__bounce animate__infinite">
                    <button className="px-4 py-2 bg-blue-500 text-white rounded">
                        Bounce Infinite
                    </button>
                </div>

                {/* Example of fadeIn animation */}
                <div className="animate__animated animate__fadeIn">
                    <button className="px-4 py-2 bg-green-500 text-white rounded">
                        Fade In
                    </button>
                </div>

                {/* Example of flash animation */}
                <div className="animate__animated animate__flash animate__infinite animate__slow">
                    <button className="px-4 py-2 bg-red-500 text-white rounded">
                        Flash Slow Infinite
                    </button>
                </div>

                {/* Example of pulse animation */}
                <div className="animate__animated animate__pulse animate__repeat-3">
                    <button className="px-4 py-2 bg-yellow-500 text-white rounded">
                        Pulse 3 Times
                    </button>
                </div>

                {/* Example of rotateIn animation */}
                <div className="animate__animated animate__rotateIn">
                    <button className="px-4 py-2 bg-purple-500 text-white rounded">
                        Rotate In
                    </button>
                </div>

                {/* Example of zoomIn animation */}
                <div className="animate__animated animate__zoomIn">
                    <button className="px-4 py-2 bg-indigo-500 text-white rounded">
                        Zoom In
                    </button>
                </div>

                {/* Example of hinge animation */}
                <div className="animate__animated animate__hinge">
                    <button className="px-4 py-2 bg-pink-500 text-white rounded">
                        Hinge
                    </button>
                </div>
            </div>
        </div>
    );
};
