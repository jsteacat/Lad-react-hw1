import type { IUser } from '../types'

const UserList = ({users}: {users: IUser[]}) => {
    return (
        <ul>
            {users.map((user: IUser) => (
                <li key={user.id}>
                    <strong>{user.name}</strong>: {user.age} лет, {user.email}
                </li>
            ))}
        </ul>
    )
}

export default UserList
