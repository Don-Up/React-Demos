import React, {useMemo} from "react";

interface ExpensiveComponentProps{
    a: number
    b: number
}

export const ExpensiveComponent: React.FC<ExpensiveComponentProps> = ({a, b}) => {

    const expensiveValue = useMemo(() => {
        console.log("Calculating expensive value...")
        return a+b
    }, [a, b])

    return (<div>Expensive Value: {expensiveValue}</div>)
}