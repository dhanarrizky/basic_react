import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <div className='centering'>
            <div className="center">
                <ul>
                    <li><Link to='/1'>Page One</Link></li>
                    <li><Link to='/2'>Page Two</Link></li>
                    <li><Link to='/3'>Page Three</Link></li>
                    <li><Link to='/3'>Page Four</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default HomePage;