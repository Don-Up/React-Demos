import React, {useRef, useState} from "react";
import { CSSTransition } from 'react-transition-group';

export const RTGPage: React.FC = () => {
    const linkRef = useRef<HTMLAnchorElement>(null)
    const [isIn, setIsIn] = useState(false)


    return (<div>
        <button onClick={() => setIsIn(!isIn)}>
            {isIn ? "Hide" :  "Show"} Link
        </button>
        <CSSTransition
            nodeRef={linkRef}
        >
            <a href="#" ref={linkRef} style={{fontSize: 100}}>Hyper Link</a>
        </CSSTransition>
    </div>)
}