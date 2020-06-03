conversation = {
  users: [
    {
      id: 0,
      name: 'Me',
      avatar: '/static/images/avatar_003.jpg',
      position: 'right',
      background: 'gray'
    },
    {
      id: 1,
      name: 'Nicole',
      avatar: '/static/images/avatar_002.jpg',
      position: 'left',
      background: 'gray'
    },
    {
      id: 2,
      name: 'Justin',
      avatar: '/static/images/avatar_001.jpg',
      position: 'left',
      background: 'gray'
    },
    {
      id: 3,
      name: 'Bot',
      avatar: '/static/images/avatar_012.jpg',
      position: 'left',
      background: 'white'
    }
  ],
  messages: [
    {
      description: 'Hello, where are you?',
      author: {$ref: 0}
    }
  ]
}
