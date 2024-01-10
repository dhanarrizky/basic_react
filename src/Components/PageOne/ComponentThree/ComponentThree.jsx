import React, { useState } from "react";

const ComponentThree = () => {
    const[count, setCount] = useState(0);

    const ClickMe = () => {
        setCount(count + 1);
    }
    return (
        <div className="com-three">
            <button onClick={() => ClickMe()}>Click me : {count}</button>
        </div>
    )
}

export default ComponentThree;

// component using hooks update