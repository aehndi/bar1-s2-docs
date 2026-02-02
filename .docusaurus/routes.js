import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/bar1-s2-docs/fr/docs',
    component: ComponentCreator('/bar1-s2-docs/fr/docs', 'e7f'),
    routes: [
      {
        path: '/bar1-s2-docs/fr/docs',
        component: ComponentCreator('/bar1-s2-docs/fr/docs', '551'),
        routes: [
          {
            path: '/bar1-s2-docs/fr/docs',
            component: ComponentCreator('/bar1-s2-docs/fr/docs', '426'),
            routes: [
              {
                path: '/bar1-s2-docs/fr/docs/intro',
                component: ComponentCreator('/bar1-s2-docs/fr/docs/intro', '898'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/bar1-s2-docs/fr/docs/overview',
                component: ComponentCreator('/bar1-s2-docs/fr/docs/overview', 'b7d'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/bar1-s2-docs/fr/',
    component: ComponentCreator('/bar1-s2-docs/fr/', 'fda'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
