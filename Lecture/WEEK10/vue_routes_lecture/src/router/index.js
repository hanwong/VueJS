import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// Vue 컴포넌트 로드
import Home from '../components/Home.vue';
import OtherHome from '../components/OtherHome.vue';

// Routes
const routes = [
  { path: '/', component: Home },
  { path: '/other', component: OtherHome },
  { path: '*', redirect: '/' },
];

// VueRouter 생성자 함수를 통해 라우팅을 수행할 객체를 생성
// Router
const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;