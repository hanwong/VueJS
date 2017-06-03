/*! vue.template-directives.js © yamoo9.net, 2017 */
;(function(global, Vue){
  'use strict';

  global.vm = new Vue({
    el: '#app',
    data: {
      is_visible: !true,
      is_show: false,
      message: 'Hello Vue',
      emotion: ':-)',
      concept: 'MVVM',
      vue_prop: [
        '빠른 렌더링',
        '경량 프레임워크',
        '점진적 향상',
        '반응형 시스템'
      ],
      content_container: '\
        <h3>명심!</h3>\
        <p class="slogan">가장 중요한 것은 기본이다.</p>\
      ',
      html_string: [
        '<h3 lang="en">Vue Concept</h3>',
        '<p class="slogan">Vue.js 설계 패턴은 {{concept}}과 유사하다.</p>'
      ].join('')
    }
  });

})(window, window.Vue);