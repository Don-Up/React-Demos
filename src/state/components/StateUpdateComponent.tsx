import React, {useState} from "react";

export const StateUpdateComponent: React.FC = () => {
    const [state1, setState1] = useState(0)

    const [array, setArray] = useState<number[]>([])

    const [obj, setObj] = useState<object>({name:'test'})

    return (<div>
        <div>state1 is {state1}</div>
        <button onClick={() => setState1(state1 + 1)}>update state1</button>
        <button onClick={() => setState1(prevState => prevState + 1)}>update state1</button>

        <div>array is {array.join(", ")}</div>
        <button onClick={() => {
            setArray([...array, Math.floor(Math.random() * 100)])
        }}>add a number to end
        </button>
        <button onClick={() => setArray([Math.floor(Math.random() * 100), ...array])}>add a number to start</button>
        <div>
            <button onClick={() => setArray(array.filter((num, index) => index !== array.length - 1))}>remove the last
                number
            </button>
        </div>
        <div>
            <button onClick={() => setArray(array.map((num, index) => index === 0 ? 100 : num))}>
                change first number to 100
            </button>
        </div>
        <br/>
        <div>
            obj is {JSON.stringify(obj)}
        </div>
        <button onClick={() => setObj({...obj, age: 18})}>Add age Property</button>
        <button onClick={() => {
            // setObj(preObj => {
            //     let obj = {}
            //     for (let [key, value] of Object.entries(preObj).filter(entry => entry[0] !== "age")) {
            //         obj[key] = value
            //     }
            //     return obj
            // })
            const {age, ...rest} = obj as any
            setObj(rest)
        }}>remove age property</button>
        <button onClick={() => setObj({...obj, age:100})}>change age to 100</button>
    </div>)
}