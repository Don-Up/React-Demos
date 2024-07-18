import React, { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import './css/styles.css';  // Import custom CSS for transitions

/**
 * npm install react-transition-group
 * npm i --save-dev @types/react-transition-group
 * @constructor
 */
export const RTGPage: React.FC = () => {
    const [items, setItems] = useState<number[]>([]);
    const [counter, setCounter] = useState(1);

    const addItem = () => {
        setItems([...items, counter]);
        setCounter(counter + 1);
    };

    const removeItem = (item: number) => {
        setItems(items.filter(i => i !== item));
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">React Transition Group Examples</h1>

            <button onClick={addItem} className="mb-4 bg-blue-500 text-white px-4 py-2 rounded">
                Add Item
            </button>

            <TransitionGroup className="list">
                {items.map(item => (
                    <CSSTransition
                        key={item}
                        timeout={500}
                        classNames="item"
                    >
                        <div className="item bg-green-500 text-white p-2 mb-2 rounded">
                            Item {item}
                            <button onClick={() => removeItem(item)} className="ml-4 bg-red-500 text-white px-2 py-1 rounded">
                                Remove
                            </button>
                        </div>
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </div>
    );
}