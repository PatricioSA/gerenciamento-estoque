import { createBrowserRouter } from 'react-router-dom'
import RootLayout from './pages/RootLayout/Layout'
import Dashboard from './pages/Dashboard/Dashboard'
import LayoutItemsPage from './pages/Items/LayoutItemsPage/LayoutItemsPage'
import AllItems from './pages/Items/AllItems'
import NewItem from './pages/Items/NewItem/NewItem'

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        children: [
            {
                index: true,
                element: <Dashboard/>
            },
            {
                path: 'items',
                element: <LayoutItemsPage/>,
                children: [
                    {
                        index: true,
                        element: <AllItems/>
                    },
                    {
                        path: 'new',
                        element: <NewItem/>
                    }
                ]
            }
        ]
    }
])

export default router