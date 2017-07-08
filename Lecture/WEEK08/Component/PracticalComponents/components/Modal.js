/*! Vue.Modal.js © yamoo9.net, 2017 */
;(function(global, Vue){
  'use strict';

  Vue.Modal = {
    template: `
      <div class="modal" :class="{'is-active': active}">
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
    props: {
      active: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      closeModal: function(){
        // this.active = false;
        // console.log('child');
        this.$emit('close');
      }
    }
  };

})(window, window.Vue);
