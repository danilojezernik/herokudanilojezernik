import {createRouter, createWebHistory} from 'vue-router'

// HOME PAGE
import IndexComp from '@/components/Index/IndexComp.vue'

// MY BIOGRAPHY
import BiographyComp from '@/components/Biography/BiographyComp.vue'
import ExperiencesComp from '@/components/Experiences/ExperiencesComp.vue'
import GitHubComp from '@/components/GitHub/GitHubComp.vue'
import ContactComp from '@/components/Contact/ContactComp.vue'
import MediaComp from '@/components/Media/MediaComp.vue'

// PROJECTS
import ProjectsComp from '@/components/Projects/ProjectsComp.vue'
import CountdownComp from '@/components/Projects/Countdown/CountdownComp.vue'

// GAMES
import GamesComp from '@/components/Games/GamesComp.vue'
import TicTacToeComp from '@/components/Games/TicTacToe/TicTacToeComp.vue'

// PAGE NOT FOUND
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
        path: '/github',
        component: GitHubComp
    },
    {
        path: '/projects',
        component: ProjectsComp
    },
    {
        path: '/projects/countdown',
        component: CountdownComp
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
