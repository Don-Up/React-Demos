import React, {useEffect, useState} from "react";
import {log} from "node:util";

export const EffectPage: React.FC = () => {

    const [count, setCount] = useState<number>(0)

    useEffect(() => {
        // console.log("Execute on each render")
    });

    useEffect(() => {
        console.log('Execute only when the component is mounted and unmounted.');
    }, []);

    useEffect(() => {
        console.log(`count is ${count}`)

        return ()=>{
            console.log("over...")
        }
    }, [count]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("http://www.baidu.com")
            console.log(response)
        }
        fetchData()
    }, []);

    return (<div>
        <button onClick={() => setCount(Math.floor(Math.random() * 100))}>
            change count
        </button>
    </div>)
}