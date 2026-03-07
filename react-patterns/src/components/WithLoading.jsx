

const WithLoading = (Component) => {
    return ({ isLoading, props }) => {
        if (isLoading === true) {
            return 'Loading ...'
        }

        return <Component {...props} />
    }
}


export default WithLoading