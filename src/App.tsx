import * as React from 'react'
import UserList from './components/UserList.tsx'
import { users } from './data'
import type { IUsersProps } from './types.ts'
import './App.css'

const withUserData = (WrappedComponent: React.ComponentType<IUsersProps>) => {
  return <WrappedComponent users={users} />
}

function App() {
    return (
        <>
          <h2>Список пользователей</h2>
          {withUserData(UserList)}
        </>
    )
}

export default App
