

const WithAuth = (Component) => {
    return function ({ isAuthenicated, props }) {
        if (isAuthenicated === false) {
            return 'Access Denied. Please Login.';
        }
        return <Component {...props} />
    }
}

export default WithAuth