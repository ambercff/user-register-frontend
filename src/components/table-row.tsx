import React from "react"

interface TableProps {
    id: number,
    name: string,
    username: string,
    email: string
}

export function Table_Row({id, name, username, email}: TableProps) {
    return (
        <tr>
            <th>{id}</th>
            <td>{name}</td>
            <td>{username}</td>
            <td>{email}</td>
        </tr>
    )
}