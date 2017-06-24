(function(global, Vue){
  'use strict';

  // 전역 컴포넌트 등록 및 슬롯 사용
  Vue.component('global-comp', {
    template: `
      <nav :class="comp_class">
        <slot>
          <h3 class="global-comp-headline">Global Comp</h3>
        </slot>
        <ul>
          <li v-for="item in items">
            <a href="">{{ item }}</a>
          </li>
        </ul>
      </nav>
    `,
    data: function() {
      return {
        comp_class: 'global-comp',
        items: [ 'github', 'aws', 'firebase' ]
      }
    }
  });

  Vue.component('hey-comp', {
    template: '<p lang="en" v-text="para_content"></p>',
    data: function() {
      return {
        para_content: 'Hey!!! Component'
      };
    }
  });

  new Vue({
    el: '.demo',
    data: {
      // 동적 컴포넌트 바인딩 :is
      myComp: 'global-comp'
    }
  });

})(window, window.Vue);