import WithAuth from "./WithAuth"


const Dashboard = () => {
    return (
        <>
            <h1>Welcome to the Dashboard</h1>
        </>
    )
}


const ProtectedDashboard = WithAuth(Dashboard)

export default ProtectedDashboard