/*! vue.start.js © yamoo9.net, 2017 */
;(function(global, Vue){
  'use strict';

  // 전역 필터
  Vue.filter('repeat', function(v, c, d){
    d = d || ', ';
    for ( var r='', i=0; i<c; i++ ){
      i === (c - 1) && (d = '');
      r += v + d;
    }
    return r;
  });
  Vue.filter('ko-currency', function(v, sign) {
    // 의존 필터가 존재할 경우, 해당 함수 반환
    var currency = Vue.filter('currency');
    // sign 매개변수 값 초기화
    sign = sign || '원';
    // 의존 필터 존재 유무 확인 후 처리
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

  // 루트 Vue 인스턴스 생성
  global.vm = new Vue({
    el: '.app',
    data: {
      // 필터 검증 콘텐츠
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
