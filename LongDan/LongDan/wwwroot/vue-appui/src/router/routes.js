import Dashboard from '@/views/reports/Dashboard'
import AnalyticsReport from '@/views/reports/analytics'
import AudienceReport from '@/views/reports/audience'
import SocialReport from '@/views/reports/social'

import Mail from '@/views/system/Mail'
import Messaging from '@/views/system/Messaging'
import People from '@/views/system/People'
import Profile from '@/views/system/Profile'
import Search from '@/views/system/Search'

import SignIn from '@/views/onboarding/SignIn'
import SignUp from '@/views/onboarding/SignUp'

import Blog from '@/views/blog/Blog'
import Article from '@/views/blog/Article'
import ArticleEdit from '@/views/blog/ArticleEdit'
import ArticlesDataGrid from '@/views/blog/ArticlesDataTable'

const routes = [
  { path: '/', name: 'Dashboard', component: Dashboard },
  { path: '/reports/analytics', name: 'Analytics Report', component: AnalyticsReport },
  { path: '/reports/audience', name: 'Audience Report', component: AudienceReport },
  { path: '/reports/social', name: 'Social Report', component: SocialReport },

  { path: '/system/mail', name: 'Mail', component: Mail },
  { path: '/system/messaging', name: 'Messaging', component: Messaging },
  { path: '/system/people', name: 'People', component: People },
  { path: '/system/profile', name: 'Profile', component: Profile },
  { path: '/system/search', name: 'Search', component: Search },

  { path: '/onboarding/signin', name: 'Sign In', component: SignIn },
  { path: '/onboarding/signup', name: 'Sign Up', component: SignUp },

  { path: '/blog', name: 'Blog', component: Blog },
  { path: '/blog/article', name: 'Article', component: Article },
  { path: '/blog/article/edit', name: 'Edit Article', component: ArticleEdit },
  { path: '/blog/articles', name: 'Articles', component: ArticlesDataGrid }
]

export default routes
