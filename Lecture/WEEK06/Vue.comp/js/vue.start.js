/*! vue.start.js © yamoo9.net, 2017 */
;(function(global, Vue){
  'use strict';

  // 전역 컴포넌트
  Vue.component('link-github', {
    name: 'hyperlink-github',
    template: '\
      <a\
        aria-label="GitHub"\
        href="https://github.com/"\
        class="button">\
        <span class="icon is-small">\
          <i class="fa fa-github" aria-hidden="true"></i>\
        </span> {{content}}\
      </a>\
    ',
    // data: {
    //   content: 'GitHub'
    // }
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
