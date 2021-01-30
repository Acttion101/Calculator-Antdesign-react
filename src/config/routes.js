import{ lazy } from'react'

const routes = {
    MobilePage:{
        path:'/mobile',
        exact: true,
        component:lazy(() => import('../Page/MobilePage'))
    },
    WebPage:{
        path:'/',
        exact: true,
        component:lazy(() => import('../Page/WebPage'))
    }
}
export default routes;