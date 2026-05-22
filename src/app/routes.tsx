import { createBrowserRouter } from 'react-router';
import { Portfolio } from './App';
import AutomobilePOS from './case-studies/automobile-pos/AutomobilePOS';
import AutomobileMobileApp from './case-studies/automobile-mobile-app/AutomobileMobileApp';
import SportsStadiumExperience from './case-studies/sports-stadium-experience/SportsStadiumExperience';
import SchoolErpCaseStudy from './case-studies/school-erp/SchoolErpCaseStudy';
import IndustrialSafetyCaseStudy from './case-studies/industrial-safety/IndustrialSafetyCaseStudy';

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
  {
    path: '/case-studies/school-erp',
    element: <SchoolErpCaseStudy />,
  },
  {
    path: '/case-studies/industrial-safety-ecosystem',
    element: <IndustrialSafetyCaseStudy />,
  },
  {
    path: '*',
    element: <Portfolio />,
  },
]);