import type { IUsersProps } from '../types'

const UserList = ({users}: IUsersProps) => {
    return (
        <ul>
            {users.map((user) => (
                <li key={user.id}>
                    <strong>{user.name}</strong>: {user.age} лет, {user.email}
                </li>
            ))}
        </ul>
    )
}

export default UserList
