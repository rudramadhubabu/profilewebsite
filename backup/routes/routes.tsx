import { createBrowserRouter } from 'react-router';
import { Portfolio } from './App';
import AutomobilePOS from './case-studies/automobile-pos/AutomobilePOS';
import AutomobileMobileApp from './case-studies/automobile-mobile-app/AutomobileMobileApp';
import SportsStadiumExperience from './case-studies/sports-stadium-experience/SportsStadiumExperience';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Portfolio />,
  },
  {
    path: '/case-studies/automobile-pos',
    element: <AutomobilePOS />,
  },
  {
    path: '/case-studies/automobile-mobile-app',
    element: <AutomobileMobileApp />,
  },
  {
    path: '/case-studies/sports-stadium-experience',
    element: <SportsStadiumExperience />,
  },
]);
