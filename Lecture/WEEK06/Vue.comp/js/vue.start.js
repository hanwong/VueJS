/*! vue.start.js © yamoo9.net, 2017 */
;(function(global, Vue){
  'use strict';

  // 전역 컴포넌트
  Vue.component('link-github', {
    name: 'hyperlink-github',
    template: '#link-github-template',
    data: function() {
      return  {
        content: 'GitHub'
      };
    }
  });

  // 루트 뷰 인스턴스 생성 이전 시점에 등록
  new Vue({
    el: '.demo'
  });

  // 전역에서 접근 가능한 Vue 컴포넌트
  global.linkGitHub = Vue.component('link-github');

})(window, window.Vue);
