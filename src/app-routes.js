import { HomePage, TasksPage, ProfilePage, Page1, Page2,Page3, Page4, Page5, Page6  } from './pages';
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
    {
        path: '/page3',
        element: Page3
    },
    {
        path: '/page4',
        element: Page4
    },
    {
        path: '/page5',
        element: Page5
    },
    {
        path: '/page6',
        element: Page6
    },

  
];

export default routes.map(route => {
    return {
        ...route,
        element: withNavigationWatcher(route.element, route.path)
    };
});
