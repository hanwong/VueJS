/*! vue.start.js © yamoo9.net, 2017 */
;(function(global, Vue){
  'use strict';

  Vue.component('count-button', {
    template: '<button type="button" @click="increase">증가</button>',
    data: function(){
      return {
        count: 0
      }
    },
    methods: {
      increase: function() {
        this.count++;
        this.$emit('increase');
      }
    }
  })

  new Vue({
    el: '.app',
    data: {
      total: 0
    },
    methods: {
      updateTotal: function() {
        this.total++;
      }
    }
  });

})(window, window.Vue);
