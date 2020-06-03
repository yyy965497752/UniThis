// TODO: Create one source of truth for mock API
const data = {
  columns: ['id', 'name', 'email', 'accountBalance', 'accountStatus', 'action'],
  rows: [
    {
      id: 0,
      url: '#/system/profile',
      name: 'Nicholas Kennedy',
      avatar: '/static/images/avatar_001.jpg',
      email: 'hello@mail.ru',
      accountBalance: 0,
      accountStatus: 'Deprecated'
    },
    {
      id: 1,
      url: '#/system/profile',
      name: 'Mildred Silva',
      avatar: '/static/images/avatar_002.jpg',
      email: 'iam@mail.ru',
      accountBalance: 300,
      accountStatus: 'Active'
    },
    {
      id: 2,
      url: '#/system/profile',
      name: 'Anthony Bryant',
      avatar: '/static/images/avatar_003.jpg',
      email: 'iam@mail.ru',
      accountBalance: 50,
      accountStatus: 'Active'
    },
    {
      id: 3,
      url: '#/system/profile',
      name: 'Victoria Banks',
      avatar: '/static/images/avatar_004.jpg',
      email: 'iam@mail.ru',
      accountBalance: 50,
      accountStatus: 'Active'
    },
    {
      id: 4,
      url: '#/system/profile',
      name: 'Ronald Taylor',
      avatar: '/static/images/avatar_005.jpg',
      email: 'iam@mail.ru',
      accountBalance: 50,
      accountStatus: 'Active'
    },
    {
      id: 5,
      url: '#/system/profile',
      name: 'Zachary Simmons',
      avatar: '/static/images/avatar_006.jpg',
      email: 'iam@mail.ru',
      accountBalance: 50,
      accountStatus: 'Active'
    },
    {
      id: 6,
      url: '#/system/profile',
      name: 'Evelyn Ferguson',
      avatar: '/static/images/avatar_007.jpg',
      email: 'iam@mail.ru',
      accountBalance: 50,
      accountStatus: 'Active'
    },
    {
      id: 7,
      url: '#/system/profile',
      name: 'Alan Wong',
      avatar: '/static/images/avatar_008.jpg',
      email: 'iam@mail.ru',
      accountBalance: 50,
      accountStatus: 'Active'
    }
  ],
  options: {
    perPage: 4,
    skin: 'table-condensed table-responsive table-hover table-striped table-inset',
    sortable: ['id', 'name', 'email', 'accountBalance', 'accounStatus']
  }
}

export default data
