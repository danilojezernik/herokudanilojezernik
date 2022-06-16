import {createRouter, createWebHistory} from 'vue-router'

import IndexComp from '@/components/Index/IndexComp.vue'
import BiographyComp from '@/components/Biography/BiographyComp.vue'
import ExperiencesComp from '@/components/Experiences/ExperiencesComp.vue'
import ProjektiComp from '@/components/Projekti/ProjektiComp.vue'
import ContactComp from '@/components/Contact/ContactComp.vue'
import MediaComp from '@/components/Media/MediaComp.vue'
import GamesComp from '@/components/Games/GamesComp.vue'
import TicTacToeComp from '@/components/Games/TicTacToe/TicTacToeComp.vue'
import NotFound from '@/components/404/404.vue'

const routes = [
    {
        path: '/',
        component: IndexComp
    },
    {
        path: '/biography',
        component: BiographyComp
    },
    {
        path: '/experiences',
        component: ExperiencesComp
    },
    {
        path: '/contact',
        component: ContactComp
    },
    {
        path: '/projects',
        component: ProjektiComp
    },
    {
        path: '/games',
        component: GamesComp
    },
    {
        path: '/games/tic-tac-toe',
        component: TicTacToeComp
    },
    {
        path: '/media',
        component: MediaComp
    },
    {
        path: '/:notFound(.*)',
        component: NotFound
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    linkActiveClass: 'active'
})

export default router
