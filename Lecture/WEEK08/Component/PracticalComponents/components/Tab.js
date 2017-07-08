/*! Tab.js @ 2017, yamoo9.net */
(function(global, Vue){
  'use strict';

  Vue.Tab = {
    template: `
      <div v-show="is_selected" role="tabpanel">
        <slot></slot>
      </div>
    `,
    mounted: function() {
      this.is_selected = this.select;
    },
    data: function() {
      return {
        is_selected: false
      }
    },
    props: {
      headline: {
        type: String,
        required: true
      },
      select: {
        type: Boolean,
        default: false
      }
    }
  };

})(window, window.Vue);