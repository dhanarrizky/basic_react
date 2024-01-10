import React from "react";
import { Link } from "react-router-dom";


const Page404 = () => {
    return (
        <div className='centering'>
            <div className="center">
                <h1>Page Not Found</h1>
                <ul>
                    <li><Link to='/'>Back To Home</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Page404;