import React from "react";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home";
import {About} from "./pages/About";
import {Dashboard} from "./pages/Dashboard";
import {Profile} from "./pages/Profile";
import HomeSub1 from "./pages/HomeSub1";
import HomeSub2 from "./pages/HomeSub2";

export const RouterPage: React.FC = () => {
    
    return (<div>
        <BrowserRouter>
            <nav>
                <ul className={"flex justify-evenly"}>
                    <li>
                        <Link to={"/"} className={"text-3xl"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/about"} className={"text-3xl"}>About</Link>
                    </li>
                    <li>
                        <Link to={"/dashboard"} className={"text-3xl"}>Dashboard</Link>
                    </li>
                    <li>
                        <Link to={"/profile/johndoe"} className={"text-3xl"}>John Doe's Profile</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path={"/"} element={<Home/>}>
                    <Route path="overview" element={<HomeSub1 />} />
                    <Route path="details" element={<HomeSub2 />} />
                </Route>
                <Route path={"/about"} element={<About/>}/>
                <Route path={"/dashboard"} element={<Dashboard/>}/>
                <Route path={"/user/"} element={<Dashboard/>}/>
                <Route path={"/profile/:username"} element={<Profile/>}/>
                <Route path={"*"} element={(<h1>404 Not Found</h1>)}/>
            </Routes>
        </BrowserRouter>
    </div>)
}