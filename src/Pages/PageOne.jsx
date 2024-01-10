import React from "react";
import { Link } from "react-router-dom";
import ComponentOne from '../Components/PageOne/ComponentOne/ComponentOne'
import ComponentTwo from '../Components/PageOne/ComponentTwo/ComponentTwo'
import ComponentThree from '../Components/PageOne/ComponentThree/ComponentThree'
import ComponenFour from "../Components/PageOne/ComponenFour/ComponenFour";
import ComponentFive from "../Components/PageOne/ComponentFive/ComponentFive";


const PageOne = () => {
    return (
        <div className='centering'>
            <div className="center">
                <ComponentOne/>
                <ComponentTwo/>
                <ComponentThree/>
                <ComponenFour/>
                <ComponentFive/>
                <ul>
                    <li><Link to='/'>Back To Home</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default PageOne;