import { isEmpty } from '@/utilities/helper'
const ifAuthenticated = (to, from, next) => {
    let isAuth = false
    const token = localStorage.getItem("token")
    const tokenExpiredAt = localStorage.getItem('tokenExpiredAt')
    let current = Number(new Date())
    if (current < tokenExpiredAt) {
        if (!isEmpty(token)) {
            isAuth = true
        }
    }
    if (isAuth) {
        next()
    } else {
        next({ name: 'login' })
    }
}

const ifNotAuthenticates = (to, from, next) => {
    let isAuth = false
    const token = localStorage.getItem("token")
    const tokenExpiredAt = localStorage.getItem('tokenExpiredAt')
    let current = Number(new Date())
    if (current < tokenExpiredAt) {
        if (!isEmpty(token)) {
            isAuth = true
        }
    }
    if (isAuth) {
        next('/')
    } else {
        next()
    }
}


export default [
    {
        path: '/match-card',
        name: 'game',
        component: import("@/pages/matchingcard.vue")
    },
    // {
    //     path: '/',
    //     name: 'get-start',
    //     component: import("@/pages/get-start.vue")
    // },
    {
        path: '/',
        name: 'landing',
        component: import("@/pages/landing.vue")
    },
    {
        path: '/login',
        name: 'login',
        beforeEnter: ifNotAuthenticates,
        component: import("@/pages/login.vue")
    },
    {
        path: '/home',
        name: 'root',
        beforeEnter: ifAuthenticated,
        component: import("@/pages/dashboard/dashboard.vue")
    },
]