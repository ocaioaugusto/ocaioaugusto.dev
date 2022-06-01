import React from 'react';
import { HOME_URL } from 'glossary/paths';
import HomeView from 'views/HomeView';

const routes = [
  {
    component: <HomeView />,
    path: HOME_URL,
  },
];

export { routes };
