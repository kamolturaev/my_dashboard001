import { HomePage, TasksPage, ProfilePage, Page1, Page2, } from './pages';
import { withNavigationWatcher } from './contexts/navigation';


const routes = [
    {
        path: '/tasks',
        element: TasksPage
    },
    {
        path: '/profile',
        element: ProfilePage
    },
    {
        path: '/home',
        element: HomePage
    },
    {
        path: '/page1',
        element: Page1
    },
    {
        path: '/page2',
        element: Page2
    },
  
];

export default routes.map(route => {
    return {
        ...route,
        element: withNavigationWatcher(route.element, route.path)
    };
});
