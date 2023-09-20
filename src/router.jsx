import { createBrowserRouter } from 'react-router-dom'
import RootLayout from './pages/Layout/Layout'
import Dashboard from './pages/Dashboard/Dashboard'

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        children: [
            {
                index: true,
                element: <Dashboard/>
            }
        ]
    }
])

export default router