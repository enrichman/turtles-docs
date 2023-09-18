/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      link: {
        type: 'generated-index',
      },
      collapsed: false,
      items: [
        'getting-started/intro',
        'getting-started/rancher',
        'getting-started/install_capi_operator',
        'getting-started/install_turtles_operator',
        {
          type: 'category',
          label: 'Your first cluster',
          link: {
            type: 'generated-index'
          },
          collapsed: false,
          items: [
            'getting-started/create-first-cluster/intro',
            'getting-started/create-first-cluster/using_kubectl',
            'getting-started/create-first-cluster/using_fleet',
          ]
        },
      ],
    },
    {
      type: 'category',
      label: 'Tasks',
      link: {
        type: 'generated-index',
      },
      collapsed: true,
      items: [
        'tasks/intro',
      ]
    },
    'CONTRIBUTING'
  ]

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

module.exports = sidebars;
