import React from "react";

const ComponentFive = () => {
    return (
        React.createElement(
            'div',
            {id: 'hello', className: 'dummyclass'},
            React.createElement('h2', null ,'this is create element react in createelement')
        )
    )
}

export default ComponentFive;