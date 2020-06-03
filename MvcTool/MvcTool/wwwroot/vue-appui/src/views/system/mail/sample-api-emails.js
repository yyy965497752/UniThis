// TODO: Create one source of truth for mock API
const authors = [
  {
    name: 'Nicholas Kennedy',
    avatar: '/static/images/avatar_001.jpg'
  },
  {
    name: 'Mildred Silva',
    avatar: '/static/images/avatar_002.jpg'
  },
  {
    name: 'Anthony Bryant',
    avatar: '/static/images/avatar_003.jpg'
  },
  {
    name: 'Victoria Banks',
    avatar: '/static/images/avatar_004.jpg'
  },
  {
    name: 'Ronald Taylor',
    avatar: '/static/images/avatar_005.jpg'
  },
  {
    name: 'Zachary Simmons',
    avatar: '/static/images/avatar_006.jpg'
  }
]

const messages = [
  {
    id: 0,
    sender: authors[0],
    recipient: authors[2],
    subject: 'WordPress 4.8, Don\'t Be Late',
    description: 'Today there is a new release of the core WordPress open source software, version 4.8 "Evans", named in honor of the great jazz pianist Bill Evans',
    dateSent: '2017-05-18',
    dateRead: '2017-05-18'
  },
  {
    id: 1,
    sender: authors[1],
    recipient: authors[2],
    subject: 'Deletion notice for your Google Cloud Shell home directory',
    description: 'Deletion notice for your Google Cloud Shell home directory Hello Cloud Shell user, It\'s been over 120 days since you opened Cloud Shell from the Google Cloud Platform console. In 7 days, your Cloud',
    dateSent: '2017-05-18',
    dateRead: '2017-05-18'
  },
  {
    id: 2,
    sender: authors[3],
    recipient: authors[2],
    subject: 'Google Analytics account scheduled for deletion',
    description: 'We want to inform you that the Google Analytics account "Tvoy Servis (UA-91650514)" was moved to the Trash Can by',
    dateSent: '2017-05-18',
    dateRead: '2017-05-18'
  },
  {
    id: 3,
    sender: authors[1],
    recipient: authors[2],
    subject: 'Improve your design skills',
    description: 'Expert level knowledge in one or more of the following areas: free to play game monetization, user engagement strategies, user acquisition/reacquisition/retention, user segmentation methodologies, and/or app subscriptions',
    dateSent: '2017-05-18',
    dateRead: '2017-05-18'
  },
  {
    id: 4,
    sender: authors[1],
    recipient: authors[2],
    subject: 'GTmetrix: Optimizing images, more test servers and upcoming features',
    description: 'Expert level knowledge in one or more of the following areas: free to play game monetization, user engagement strategies, user acquisition/reacquisition/retention, user segmentation methodologies, and/or app subscriptions',
    dateSent: '2017-05-18',
    dateRead: '2017-05-18'
  },
  {
    id: 5,
    sender: authors[4],
    recipient: authors[2],
    subject: 'Order #175096',
    description: 'Expert level knowledge in one or more of the following areas: free to play game monetization, user engagement strategies, user acquisition/reacquisition/retention, user segmentation methodologies, and/or app subscriptions',
    dateSent: '2017-05-18',
    dateRead: '2017-05-18'
  },
  {
    id: 6,
    sender: authors[1],
    recipient: authors[2],
    subject: 'Password change for your Yahoo account',
    description: 'Expert level knowledge in one or more of the following areas: free to play game monetization, user engagement strategies, user acquisition/reacquisition/retention, user segmentation methodologies, and/or app subscriptions',
    dateSent: '2017-05-18',
    dateRead: '2017-05-18'
  },
  {
    id: 7,
    sender: authors[5],
    recipient: authors[2],
    subject: 'Sign in notification from Yahoo',
    description: 'Expert level knowledge in one or more of the following areas: free to play game monetization, user engagement strategies, user acquisition/reacquisition/retention, user segmentation methodologies, and/or app subscriptions',
    dateSent: '2017-05-18',
    dateRead: '2017-05-18'
  }
]

export default messages
