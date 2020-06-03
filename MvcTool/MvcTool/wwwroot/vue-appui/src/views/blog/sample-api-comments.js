// TODO: Create one source of truth for mock API
const comments = [
  {
    id: 0,
    author: {
      name: 'Nicholas Kennedy',
      avatar: '/static/images/avatar_001.jpg'
    },
    description: 'Simply dummy text of the printing and typesetting industry.',
    datePublished: '2017-10-12',
    children: [
      {
        id: 1,
        author: {
          name: 'Mildred Silva',
          avatar: '/static/images/avatar_002.jpg'
        },
        description: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default.',
        datePublished: '2017-04-05'
      },
      {
        id: 2,
        author: {
          name: 'Anthony Bryant',
          avatar: '/static/images/avatar_003.jpg'
        },
        description: 'Sometimes by accident, sometimes on purpose (injected humour and the like).',
        datePublished: '2017-11-16'
      }
    ]
  },
  {
    id: 3,
    author: {
      name: 'Victoria Banks',
      avatar: '/static/images/avatar_004.jpg'
    },
    description: 'All the Lorem Ipsum generators.',
    datePublished: '2017-10-06'
  },
  {
    id: 4,
    author: {
      name: 'Kathy Patterson',
      avatar: '/static/images/avatar_005.jpg'
    },
    description: 'Which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
    datePublished: '2017-12-09'
  },
  {
    id: 5,
    author: {
      name: 'Ronald Taylor',
      avatar: '/static/images/avatar_006.jpg'
    },
    description: 'Packages and web page editors now use Lorem Ipsum as.',
    datePublished: '2017-04-08'
  }
]

export default comments
