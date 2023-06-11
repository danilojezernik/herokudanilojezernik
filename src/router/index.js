import {createRouter, createWebHistory} from 'vue-router'

// HOME PAGE
import IndexComp from '@/components/Index/IndexComp.vue'
import BiographyComp from '@/components/Biography/BiographyComp.vue'
import ExperiencesComp from '@/components/Experiences/ExperiencesComp.vue'
import GitHubComp from '@/components/GitHub/GitHubComp.vue'
import ContactComp from '@/components/Contact/ContactComp.vue'
import MediaComp from '@/components/Media/MediaComp.vue'

// PROJECTS
import ProjectsComp from '@/components/Projects/ProjectsComp.vue'
import BeginnerProjectsComp from '@/components/Projects/BeginnerProjects/BeginnerProjectsComp.vue'
import CountdownComp from '@/components/Projects/BeginnerProjects/Countdown/CountdownComp.vue'
import UnitConverterComp from '@/components/Projects/BeginnerProjects/UnitConverter/ConverterComp.vue'
import GuessNumberComp from '@/components/Projects/BeginnerProjects/GuessNumber/GuessNumberComp.vue'
import WeatherAppComp from '@/components/Projects/BeginnerProjects/WeatherApp/WeatherAppComp.vue'
import NumerologyComp from '@/components/Projects/BeginnerProjects/Numerology/NumerologyComp.vue'
import ToDoComp from '@/components/Projects/BeginnerProjects/ToDo/ToDoComp.vue'
import WebComp from '@/components/Web/WebComp.vue'

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
        path: '/github-projects',
        component: GitHubComp
    },
    {
        path: '/projects',
        component: ProjectsComp
    },
    {
        path: '/projects/web',
        component: WebComp
    },
    {
        path: '/projects/beginner',
        component: BeginnerProjectsComp
    },
    {
        path: '/projects/countdown',
        component: CountdownComp
    },
    {
        path: '/projects/converter',
        component: UnitConverterComp
    },
    {
        path: '/projects/guess-number',
        component: GuessNumberComp
    },
    {
        path: '/projects/weather-app',
        component: WeatherAppComp
    },
    {
        path: '/projects/numerology',
        component: NumerologyComp
    },
    {
        path: '/projects/todo',
        component: ToDoComp
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
    routes
})

export default router
