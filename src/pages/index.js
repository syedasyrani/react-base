import React, { useState } from 'react'

import Layout from '../components/Layout'

const ManpowerAdmin = () => {
    const [isLoading, setIsLoading]   = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('api-token'))

    return (
        <React.Fragment>
            <Layout />
        </React.Fragment>
    )
}

export default ManpowerAdmin