import React from "react";
import styled from "styled-components";

export const TransitionPage: React.FC = () => {

    const Button = styled.button`
        background-color: blueviolet;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s, transform 0.3s;
        
        &:hover {
            background-color: lightblue;
            transform: scale(1.1);
        }
    `
    const TwButton:React.FC<{children:string}> = ({children}) => {
        return (<button
            className={"bg-[lightblue] py-2 px-4 border-none rounded-md cursor-pointer " +
                "transition duration-300 transform hover:bg-[red] hover:scale-110"}
        >{children}</button>)
    }


    return (<div>
        <Button>Click Me</Button>
        <TwButton>Click Me!</TwButton>
    </div>)
}