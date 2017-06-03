(function(global, Vue){
  'use strict';

  global.demo = new Vue({
    el: '.demo',
    data: {
      // fdc: front-end design camp
      class_name: 'front-end design camp',
      fdc: classUsingArray // [{}, {}, {}, ...] length: 10
    }
  });

})(window, window.Vue);