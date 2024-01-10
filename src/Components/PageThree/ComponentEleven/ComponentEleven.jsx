import React from "react";

const ComponentEleven = (props) => {
    const clickMe = () => {
        console.log('Button Clicked')
    }

    return (
        <div className="com-elevent">
            <button onClick={() => clickMe()}>Click Me Please !!!</button>
        </div>
    )
}


export default ComponentEleven