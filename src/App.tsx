import UserList from './components/UserList.tsx'
import { users } from './data'
import './App.css'

function App() {
    return (
        <>
          <h2>Список пользователей</h2>
          <UserList users={users}/>
        </>
    )
}

export default App
