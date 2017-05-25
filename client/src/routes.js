import Common from './components/Common.jsx';
import HomePage from './components/HomePage.jsx';

const routes = {
  component: Common,
  childRoutes: [
    {
      path: '/',
      component: HomePage
    }
  ]
}

export default routes;
