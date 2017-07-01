(function(global, Vue){
  'use strict';


  new Vue({
    el: '.app',
    components: {
      'slot-demo': {
        template: '#slot-demo-template'
      }
    }
  });

})(window, window.Vue);