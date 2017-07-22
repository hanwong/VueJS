import Vue from 'vue';
import App from './App.vue';

// Vue 플러그인 로드
import VueResource from 'vue-resource';

// Vue 플러그인 사용 설정
Vue.use(VueResource);

// Firebase DB API Address
// https://vue-aync-comm-ce798.firebaseio.com
// child: [books.json]

new Vue({
  el: '#app',
  render: h => h(App)
});
