import WYYDiscover from '@/pages/discover';
import WYYMine from '@/pages/mine';
import WYYFriends from '@/pages/friends';

const routes = [
  {
    path: '/',
    exact: true,
    component: WYYDiscover,
  },
  {
    path: '/my',
    component: WYYMine,
  },
  {
    path: '/friends',
    component: WYYFriends,
  },
];
export default routes;
