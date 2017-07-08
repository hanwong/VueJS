/*! vue.start.js © yamoo9.net, 2017 */
;(function(global, Vue){
  'use strict';

  // 비공개 함수
  var changeCurrencyNumber = function(value){
    value = value.toString().split('').reverse();
    for ( var i=0, l=value.length; i<l; i+=3 ) {
      i > 0 && value.splice(i, 0, ',');
    }
    return value.reverse().join('');
  };

  // 전역 필터로 등록
  Vue.filter('number', changeCurrencyNumber);

  new Vue({
    el: '.app',
    // 지역 필터로 등록
    filters: {
      currency: function(value){
        // 등록된 Vue.filter('number') 함수 활용
        // value = Vue.filter('number')(value);
        value = changeCurrencyNumber(value);
        return value + '원';
      }
    }
  })

})(window, window.Vue);
