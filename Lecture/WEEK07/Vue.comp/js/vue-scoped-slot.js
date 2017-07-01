/*! vue-scope.slot.js @ 2017, yamoo9.net */
(function(global, Vue){
  'use strict';

  new Vue({
    el: '.app',
    components: {
      parentComp: global.ParentComp
    }
  });

})(window, window.Vue);