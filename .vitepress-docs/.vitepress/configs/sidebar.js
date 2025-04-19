export default {
  '/api/': getApiSidebar(),
  '/components/': getComponentsSidebar(),
  '/guide/': getGuideSidebar(),
};

function getApiSidebar() {
  return [
    {
      text: 'Features',
      collapsible: true,
      items: [
        {
          text: 'API',
          link: '/api/',
        },
      ],
    },
  ];
}

function getComponentsSidebar() {
  return [
    {
      text: 'Components',
      collapsible: true,
      items: [
        {
          text: 'Actions',
          link: '/components/actions',
        },
        {
          text: 'Vue',
          link: '/components/vue',
        },
        {
          text: 'Vue Script',
          link: '/components/vue-script',
        },
      ],
    },
    {
      text: 'Common Components',
      collapsible: true,
      collapsed: true,
      items: [
        { text: 'AddButton', link: '/components/add-button' },
        { text: 'DataForm', link: '/components/data-form' },
        { text: 'DeleteButton', link: '/components/delete-button' },
        { text: 'Icon Selector', link: '/components/icon-selector' },
        { text: 'Modal Dialog', link: '/components/modal-dialog' },
        { text: 'Popover Message', link: '/components/popover-message' },
        { text: 'Rich Text Editor', link: '/components/rich-text-editor' },
        { text: 'Search Content', link: '/components/search-content' },
        { text: 'Table', link: '/components/table' },
      ],
    },
  ];
}

function getGuideSidebar() {
  return [
    {
      text: 'Guide',
      collapsible: true,
      items: [
        {
          text: 'About',
          link: '/guide/about',
        },
        {
          text: 'Installation',
          link: '/guide/installation',
        },
        {
          text: 'Changelog',
          link: '/guide/changelog',
        },
        {
          text: 'Button',
          link: '/guide/button',
        },
        {
          text: 'Modal',
          link: '/guide/modal',
        },
      ],
    },
  ];
}
