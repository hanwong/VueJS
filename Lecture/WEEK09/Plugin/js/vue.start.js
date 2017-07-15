/*! vue.start.js © yamoo9.net, 2017 */
;(function(global, Vue){
  'use strict';

  // Vue 플러그인(확장 Set)
  var y9 = {
    config: {},
    install: function (Vue, options) {
      console.log(options);
      // Vue 생성자 함수의 속성, 메서드
      // 유틸리티 메서드
      Vue.type = function(o) {
        return Object.prototype.toString.call(o).toLowerCase().slice(8,-1);
      };
      // Vue.favorite_drinks = ['coffee', 'juice'];
      // Vue.prototype 객체의 속성, 메서드
      // 필터, 믹스인, 디렉티브
    }
  }

  Vue.use(y9.install, {
    name: 'y9-plugin'
  });

  new Vue({
    el: '.app',
    methods: {
      checkType: function(data) {
        console.log(Vue.type(data));
      }
    }
  });

})(window, window.Vue);
