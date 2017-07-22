import Vue from 'vue';
import App from './App.vue';

// axios 모듈 로드
import axios from 'axios';

// ------------------------------------------------------------------------------------------

// API 기본 주소 설정
axios.defaults.baseURL = 'https://vue-aync-comm-ce798.firebaseio.com/books.json';
// axios.defaults.headers.common['Authorization'] = 'Token RQWR@#$%';

// Vue 생성자 함수의 속성 http, Vue 프로토타입 객체의 속성 $http로 확장
// Vue {} 인스턴스(컴포넌트) 내에서 this.$http 로 참조 가능
Vue.http = Vue.prototype.$http = axios;

// ------------------------------------------------------------------------------------------

// Vue 플러그인 로드
// import VueResource from 'vue-resource';

// Vue 플러그인 사용 설정
// Vue.use(VueResource);

// Vue.http.options.root = 'https://vue-aync-comm-ce798.firebaseio.com/books.json';
// Vue.http.headers['Authorization'] = 'Token RQWR@#$%';

// Firebase DB API Address
// https://vue-aync-comm-ce798.firebaseio.com
// child: [books.json]

new Vue({
  el: '#app',
  render: h => h(App)
});
