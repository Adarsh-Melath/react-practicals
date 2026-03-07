import ProtectedDashboard from "./components/Dashboard"
import UserWithLoading from "./components/UserList"

function App() {
  return (
    <>
      {/* <UserWithLoading isLoading={false} /> */}
      <ProtectedDashboard isAuthenicated={false} />
    </>
  )
}

export default App
