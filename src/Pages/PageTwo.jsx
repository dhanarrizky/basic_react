import React from "react";
import { Link } from "react-router-dom";
import ComponentSix from "../Components/PageTwo/ComponentSix/ComponentSix";
import ComponentSeven from "../Components/PageTwo/ComponentSeven/ComponentSeven";

const PageTwo = () => {
    return (
        <div className="centering">
            <div className="center">
                <ComponentSix name='dhanar'>
                    <button>dhanar button</button>
                </ComponentSix>
                <ComponentSix name='rizky'/>
                <ComponentSeven name='krisnadhy'/>
                <ul>
                    <li>
                        <Link to='/'>Back To Home</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default PageTwo;