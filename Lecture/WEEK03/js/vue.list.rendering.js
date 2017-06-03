(function(global, Vue){
  'use strict';

  global.demo = new Vue({
    el: '.demo',
    data: {
      is_block_show: true,
      using_register: !true,
      class_name: 'front-end design camp',
      // fdc: front-end design camp
      fdc: classUsingArray // [{}, {}, {}, ...] length: 10
    }
  });

})(window, window.Vue);