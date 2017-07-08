/*! vue.start.js © yamoo9.net, 2017 */
;(function(global, Vue){
  'use strict';

  Vue.filter('number', function(value){
    value = value.toString().split('').reverse();
    for ( var i=0, l=value.length; i<l; i+=3 ) {
      i > 0 && value.splice(i, 0, ',');
    }
    return value.reverse().join('');
  });

  Vue.filter('currency', function(value){
    return value + '원';
  });

  new Vue({
    el: '.app'
  })

})(window, window.Vue);
