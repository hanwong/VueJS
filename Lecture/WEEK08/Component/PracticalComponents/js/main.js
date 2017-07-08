/*! vue.start.js © yamoo9.net, 2017 */
;(function(global, Vue){
  'use strict';

  new Vue({
    el: '.app',
    components: {
      message: Vue.Message,
      modal: Vue.Modal
    },
    data: {
      is_actived_modal: false
    },
    methods: {
      activeModal: function(){
        this.is_actived_modal = true;
      },
      deactiveModal: function() {
        this.is_actived_modal = false;
      }
    }
  });

})(window, window.Vue);
