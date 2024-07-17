import React from "react";
import {useNavigate, useParams} from "react-router-dom";

export const Profile : React.FC = () => {
    const {username} = useParams<{username:string}>()

    const navigate = useNavigate()

    return (<div>
        <h1>{username}</h1>
        <button onClick={() => {
            navigate("/")
        }}>Navigate to Home</button>
    </div>)
}