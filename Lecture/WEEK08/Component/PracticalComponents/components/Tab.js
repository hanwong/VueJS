/*! Tab.js @ 2017, yamoo9.net */
(function(global, Vue){
  'use strict';

  Vue.Tab = {
    template: `
      <li role="presentation" :class="{'is-active': select}">
        <a href role="tab">test</a>
      </li>
    `,
    props: {
      select: {
        type: Boolean,
        default: false
      }
    }
  };

})(window, window.Vue);