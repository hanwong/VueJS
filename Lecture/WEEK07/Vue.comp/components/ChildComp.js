/*! ChildComp.js @ 2017, yamoo9.net */
(function(global, Vue){
  'use strict';

  // Vue 객체 생성
  global.ChildComp = Vue.extend({
    template: `
      <div class="child">
        <slot :content="text"></slot>
      </div>
    `,
    components: {
      childComp: global.ChildComp
    },
    data: function() {
      return {
        text: '오늘도 Vue를 정복해보았습니다.'
      }
    }
  });

})(window, window.Vue);