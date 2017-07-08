/*! Vue.Modal.js © yamoo9.net, 2017 */
;(function(global, Vue){
  'use strict';

  Vue.Modal = {
    template: `
      <div class="modal" :class="{'is-active': is_active}">
        <div @click="closeModal" class="modal-background"></div>
        <div class="modal-content">
          <slot></slot>
        </div>
        <button
          type="button"
          class="modal-close is-large"
          aria-label="Close Modal Window"
          @click="closeModal"></button>
      </div>
    `,
    mounted: function(){
      // data 속성 = props 속성
      this.is_active = this.active;
    },
    data: function() {
      return {
        is_active: false
      }
    },
    methods: {
      closeModal: function(){
        this.is_active = false;
      }
    },
    props: {
      active: {
        type: Boolean,
        default: false
      }
    }
  };

})(window, window.Vue);
