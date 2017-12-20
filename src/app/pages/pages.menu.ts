export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      {
        path: 'dashboard',
        data: {
          menu: {
            title: 'Dashboard',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,  
            order: 0
          }
        }
      }, {
        path: ['charts', 'chartist-js'],
        data: {
          menu: {
            title: 'Charts',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,  
            order: 0
          }
        }
      }
    ]
  }
];
