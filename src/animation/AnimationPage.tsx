import React from "react";
import styled from "styled-components";

export const AnimationPage: React.FC = () => {

    const Button = styled.button`
        @keyframes slide {
            0% {
                transform: translateX(0);
            }
            100% {
                transform: translateX(100px);
            }
        }
        
        width: 100px;
        height: 100px;
        background-color: olivedrab;
        animation: slide 2s ease-in-out 3;
    `

    return (<div>
        <Button>Show Anim</Button>
    </div>)
}