import{ lazy } from'react'

const routes = {
    Home:{
        path:'/',
        exact: true,
        component:lazy(() => import('../test'))
    }
}
export default routes;