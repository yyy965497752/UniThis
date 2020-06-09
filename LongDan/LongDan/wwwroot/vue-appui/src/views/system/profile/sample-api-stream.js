// TODO: Create one source of truth for mock API
const authors = [
  {
    id: 0,
    name: 'John Doe',
    avatar: '/static/images/avatar_003.jpg'
  }
]

const stream = [
  {
    id: 0,
    author: authors[0],
    description: 'Donec id elit non mi porta gravida at eget metus.',
    datePublished: '5m'
  },
  {
    id: 1,
    author: authors[0],
    description: 'Integer posuere erat a ante venenatis dapibus posuere velit aliquet.',
    datePublished: '2h'
  },
  {
    id: 2,
    author: authors[0],
    description: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    datePublished: '1 day'
  },
  {
    id: 3,
    author: authors[0],
    description: 'Morbi leo risus, porta ac consectetur ac, vestibulum at eros.',
    datePublished: '1 day'
  },
  {
    id: 3,
    author: authors[0],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    datePublished: '3 days'
  }
]

export default stream
