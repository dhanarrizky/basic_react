import React from "react";

const ComponentSix = props => {
    console.log(props.name)
    return (
    <div className="com-six">
        <h1>Hallo {props.name}, How Are You ?</h1>
        {props.children}
    </div>
    )
}

export default ComponentSix;