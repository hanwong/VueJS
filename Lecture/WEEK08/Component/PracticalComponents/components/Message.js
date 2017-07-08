/*! Vue.Message.js © yamoo9.net, 2017 */
;(function(global, Vue){
  'use strict';

  Vue.Message = {
    template: `
      <article v-if="is_visible" class="message is-primary">
        <div class="message-header">
          <slot name="header"></slot>
          <button
            @click="removeMessage"
            type="button"
            class="delete"
            aria-label="remove message box"></button>
        </div>
        <div class="message-body">
          <slot name="body"></slot>
        </div>
      </article>
    `,
    data: function() {
      return {
        is_visible: true
      }
    },
    methods: {
      removeMessage: function() {
        this.is_visible = false;
      }
    }
  };

})(window, window.Vue);
