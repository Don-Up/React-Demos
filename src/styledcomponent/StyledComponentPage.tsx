import React, {useEffect, useRef} from "react";
import styled, {createGlobalStyle, keyframes, ThemeProvider} from "styled-components";

export const StyledComponentPage: React.FC = () => {

    const Button = styled.button`
        background-color: #4CAF50;
        &:hover {
            background-color: #45a049;
        }
    `

    // Dynamic styles
    const Button1 = styled.button<{primary?:boolean}>`
        background: ${props => props.primary?"palevioletred":"white"};
        &:hover {
            background: ${props => props.primary?'darkred' : 'lightgray'};
        }
    `

    // pass in external variables
    const fontSize = 22

    const Button2 = styled.button`
        background: green;
        font-size: ${fontSize}px;
    `

    // Style Nesting
    const Card = styled.div`
        background: papayawhip;
        
        h2 {
            color: palegoldenrod;
        }
    `

    // Style Inheritance
    const BaseButton = styled.button`
        background: palegoldenrod;
        color: white;
    `

    const PrimaryButton = styled(BaseButton)`
        background: darkviolet;
    `

    // Use theme
    const theme = {
        colors:{
            primary: "palegoldenrod",
            secondary: "red"
        }
    }

    const ThemeButton = styled.button`
        background: ${props => props.theme.colors.primary};
    `

    // global style
    const GlobalStyle = createGlobalStyle`
        body{
            margin: 0;
            padding: 0;
            font-family: sans-serif;
            font-style: italic;
            background: #61dafb;
        }
    `

    // Media queries
    const Container = styled.div`
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        
        @media (max-width: 768px) {
            max-width: 100%;
        }
    `

    // Use Ref to get the component reference
    const Input = styled.input`
        padding: 0.5em;
        margin: 0.5em;
        color: palevioletred;
        background: papayawhip;
        border: none;
        border-radius: 3px;
    `
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        inputRef?.current?.focus()
    }, []);

    // Animation
    const rotate = keyframes`
        from {
            transform: rotate(0deg);
        }
        to {
            transform:rotate(360deg);
        }
    `

    const RotatingDiv = styled.div`
        display: inline-block;
        animation: ${rotate} 2s linear infinite;
    `

    return (<Container>
        <Button>Click Me</Button>
        <Button1 primary>Click Me</Button1>
        <Button1 primary={false}>Click Me</Button1>
        <Button2>Click Me 666</Button2>
        <Card>
            <h2>Title</h2>
            <p>Content</p>
        </Card>
        <PrimaryButton>Click Me</PrimaryButton>
        <ThemeProvider theme={theme}>
            <ThemeButton>Click Me</ThemeButton>
        </ThemeProvider>
        <GlobalStyle/>
        <Input ref={inputRef} placeholder={"Focus me on mount"}/>
        <RotatingDiv>🔄</RotatingDiv>
    </Container>)
}