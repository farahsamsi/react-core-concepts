import { useEffect, useState } from "react"
import User from "./User";

export default function Users() {
    const [users, setUsers] = useState(); //Step1: declare a state to hold the data


    //Step 2: useEffect with call back and dependency array
    useEffect(() => {
        // Step 3: use fetch to load data
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data)) // Step 4: set loaded data to setUsers function
    }, [])
    return (
        <div>
            <h3>Users : {users.length}</h3>
            {
                // Step 5: displaying data on the component
                users.map(user => <User user={user}></User>)
            }
        </div>
    )
}