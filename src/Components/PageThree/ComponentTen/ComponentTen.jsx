import React from "react";

// const ComponentTen = ({firstName, lastName}) => { // <= we can use it too
const ComponentTen = props => {
    const{firstName, lastName} = props
    return (
        <div className="com-ten">
            <ul>
                <li><h3>First Name : {firstName}</h3></li>
                <li><h3>Last Name : {lastName}</h3></li>
            </ul>
        </div>
    )
}

export default ComponentTen;