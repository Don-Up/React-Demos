import React from "react";

interface UserCardProps{
    name: string
    age: number
    email: string
}

export const UserCard: React.FC<UserCardProps> = ({name, age, email}) => {

    return (<div className={"p-4 border rounded bg-purple-200"}>
        <h3 className={"text-lg font-semibold"}>User Information</h3>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Age:</strong> {age}</p>
        <p><strong>Email:</strong> {email}</p>
    </div>)
}