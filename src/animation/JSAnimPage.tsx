import React, { useEffect, useRef } from "react";

/**
 * JSAnimPage Component
 * Demonstrates using the Web Animations API to animate a link.
 *
 * @constructor
 */
export const JSAnimPage: React.FC = () => {

    // useRef hook to get a reference to the anchor element
    const linkRef = useRef<HTMLAnchorElement>(null);

    // useEffect hook to run the animation when the component mounts
    useEffect(() => {
        if (linkRef.current) {
            // Use the Web Animations API to animate the link's opacity
            linkRef.current.animate([
                {
                    opacity: 1
                },
                {
                    opacity: 0.5
                },
                {
                    opacity: 1
                }
            ], {
                duration: 3000, // Animation duration in milliseconds
                iterations: Infinity // Animation will repeat infinitely
            });
        }
    }, []);

    return (
        <div>
            {/* Anchor element with a reference and inline styling */}
            <a href="#" ref={linkRef} style={{ fontSize: 100 }}>
                HYPER LINK
            </a>
        </div>
    );
}
