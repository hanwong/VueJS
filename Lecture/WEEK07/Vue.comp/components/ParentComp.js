/*! ParentComp.js @ 2017, yamoo9.net */
(function(global, Vue){
  'use strict';

  // Vue 객체 생성
  global.ParentComp = Vue.extend({
    template: `
      <child-comp @call-parent="receiveFromChild">
        <template scope="child">
          <p>자식 컴포넌트의 영역을 가진 slot 속성 값: {{child.content}}</p>
        </template>
      </child-comp>
    `,
    components: {
      childComp: global.ChildComp
    },
    methods: {
      receiveFromChild: function() {
        console.log('Yes. I\'m Your Father');
      }
    }
  });

})(window, window.Vue);