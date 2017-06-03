(function(global, Vue){
  'use strict';

  global.demo = new Vue({
    el: '.demo',
    data: {
      is_block_show: true,
      using_register: true,
      class_name: 'front-end design camp',
      // fdc: front-end design camp
      fdc: classUsingArray // [{}, {}, {}, ...] length: 10
    },
    // Life Cycle Hook
    beforeCreate: function() {
      console.log('Vue 객체(인스턴스) 생성 이전 시점');
    },
    created: function() {
      console.log('Vue 객체(인스턴스) 생성 이후 시점');
    },
    beforeMount: function() {
      console.log('Vue 객체(인스턴스) 마운트 이전 시점');
    },
    mounted: function() {
      console.log('Vue 객체(인스턴스) 마운트 이후 시점');
    },
    beforeUpdate: function() {
      console.log('Vue 객체(인스턴스) 업데이트 이전 시점');
    },
    updateed: function() {
      console.log('Vue 객체(인스턴스) 업데이트 이후 시점');
    },
    beforeDestroy: function() {
      console.log('Vue 객체(인스턴스) 파괴 이전 시점');
    },
    destroyed: function() {
      console.log('Vue 객체(인스턴스) 파괴 이후 시점');
    }
  });

})(window, window.Vue);