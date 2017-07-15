/*! vue.start.js © yamoo9.net, 2017 */
;(function(global, Vue){
  'use strict';

  // 전역 필터
  Vue.filter('repeat', function(v, c, d){
    d = d || ', ';
    for ( var r='', i=0; i<c; i++ ){
      if ( i === (c - 1) ) { d = ''; }
      r += v + d;
    }
    return r;
  });
  Vue.filter('ko-currency', function(v, sign) {
    var currency = Vue.filter('currency'); // 존재할 경우, 함수 반환
    sign = sign || '원';
    if( !currency ) {
      return currency(v, '', 0) + sign;
    } else {
      v = v.toString().split('').reverse();
      for ( var i=0, l=v.length; i<l; i+=3 ) {
        i > 0 && v.splice(i, 1, v[i]+',');
      }
      return v.reverse().join('') + sign;
    }
  });

  global.vm = new Vue({
    el: '.app',
    data: {
      filterContents: [
        'mixin',
        'filter',
        'directive',
        'plugin',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio repudiandae veritatis atque harum voluptatibus, nemo incidunt debitis perferendis ab velit explicabo rem! Sequi officiis eos ipsum iste, asperiores omnis natus.'
      ]
    },
    methods: {
      isExistFilter: function(name) {
        console.log( !!Vue.filter(name) );
      },
      limitTo: function(o, t, s) {
        s = s || 0;
        t = t || o.length;
        return o.slice(s, t);
      }
    }
  });

})(window, window.Vue);
