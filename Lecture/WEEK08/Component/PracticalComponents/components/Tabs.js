/*! Tabs.js @ 2017, yamoo9.net */
(function(global, Vue){
  'use strict';

  Vue.Tabs = {
    template: `
      <div class="tabs">
        <ul role="tablist">
          <slot></slot>
        </ul>
      </div>
    `
  };

})(window, window.Vue);