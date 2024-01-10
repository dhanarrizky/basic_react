import React from "react";
import ComponentNine from "../Components/PageThree/ComponentNine/ComponentNine";
import ComponentTen from "../Components/PageThree/ComponentTen/ComponentTen";
import ComponentEleven from "../Components/PageThree/ComponentEleven/ComponentEleven";

const PageThree = () => {
    return (
        <div className="centering">
            <div className="center">
                <ComponentNine/>
                <hr />
                <ComponentTen firstName='dhanar' lastName='rizky'/>
                <hr />
                <ComponentEleven/>
            </div>
        </div>       
    )
}

export default PageThree;