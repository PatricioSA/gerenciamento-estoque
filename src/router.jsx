import { createBrowserRouter } from 'react-router-dom'
import RootLayout from './pages/RootLayout/Layout'
import Dashboard from './pages/Dashboard/Dashboard'
import LayoutItemsPage from './pages/Items/LayoutItemsPage/LayoutItemsPage'
import AllItems from './pages/Items/AllItems'
import NewItem from './pages/Items/NewItem'
import IndividualItem from './pages/Items/IndividualItem/IndividualItem'
import UpdateItem from './pages/Items/UpdateItem'

const router = createBrowserRouter([
    {
        path: '/gerenciamento-estoque/',
        element: <RootLayout/>,
        children: [
            {
                index: true,
                element: <Dashboard/>
            },
            {
                path: '/gerenciamento-estoque/items/',
                element: <LayoutItemsPage/>,
                children: [
                    {
                        index: true,
                        element: <AllItems/>
                    },
                    {
                        path: 'new',
                        element: <NewItem/>
                    },
                    {
                        path: ':id',
                        element: <IndividualItem/>
                    },
                    {
                        path: ':id/update',
                        element: <UpdateItem/>
                    },
                ]
            }
        ]
    }
])

export default router