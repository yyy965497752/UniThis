// TODO: Create one source of truth for mock API
const users = [
  {
    id: 0,
    name: 'James',
    avatar: '/static/images/avatar_001.jpg'
  },
  {
    id: 1,
    name: 'Helen',
    avatar: '/static/images/avatar_002.jpg'
  },
  {
    id: 2,
    name: 'John',
    avatar: '/static/images/avatar_003.jpg'
  },
  {
    id: 3,
    name: 'Julia',
    avatar: '/static/images/avatar_004.jpg'
  }
]

export const chats = [
  {
    id: 0,
    title: 'One',
    lastMessage: 'Frogs are the future',
    user: users[1],
    timestamp: 1459361875666
  },
  {
    id: 1,
    title: 'Two',
    lastMessage: 'Frogs are the future',
    user: users[2],
    timestamp: 1459361875666
  },
  {
    id: 2,
    title: 'Three',
    lastMessage: 'Buy my eyedrops (used)',
    user: users[3],
    timestamp: 1459361875666
  }
]

export const messages = [
  {
    id: 0,
    sender: users[0],
    align: 'end',
    body: 'Now we have frogs everywhere!',
    dateSent: '2017-05-01'
  },
  {
    id: 1,
    sender: users[1],
    align: 'start',
    body: 'Yeah, that is exactly what I dreamed about!',
    dateSent: '2017-05-01'
  },
  {
    id: 2,
    sender: users[0],
    align: 'end',
    body: 'I am glad you like it!',
    dateSent: '2017-05-01'
  },
  {
    id: 3,
    sender: users[1],
    align: 'start',
    body: 'For sure!',
    dateSent: '2017-05-01'
  }
]
