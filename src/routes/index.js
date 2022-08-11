import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './Home'
import Info from './Info'



export default createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', component: Home},
        { path: '/info', component: Info}
    ]
})