import React from "react";
import {Link, Navigate, Route, Routes} from "react-router-dom";
import HomeSub1 from "./HomeSub1";
import HomeSub2 from "./HomeSub2";

export const Home: React.FC = () => {

    return (<div>
        <h1>Home</h1>
        <nav>
            <ul className={"flex justify-evenly"}>
                <li>
                    <Link to="overview">Overview</Link>
                </li>
                <li>
                    <Link to="details">Details</Link>
                </li>
            </ul>
        </nav>
        <Routes>
            <Route index element={<Navigate to={"overview"}/>}/>
            <Route path="overview" element={<HomeSub1/>}/>
            <Route path="details" element={<HomeSub2/>}/>
        </Routes>
    </div>)
}