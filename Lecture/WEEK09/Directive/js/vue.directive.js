/*! vue.start.js © yamoo9.net, 2017 */
;(function(global, Vue){
  'use strict';

  // 글로벌 디렉티브 정의
  Vue.directive('focus', {
    bind: function(el, binding){
      console.log(binding); // { name, rawName, modifiers, arg, ... }
      // console.log(el); // <a>
      // el.style.cssText = '\
      //   color: tan;\
      //   padding: 0.3em 1em;\
      //   outline: 3px solid currentColor\
      // ';
      // el.focus();
    },
    inserted: function(el) {
      console.log(el); // control element
    },
    update: function() {},
    componentUpdated: function() {},
    unbind: function() {}
  });
  // Vue.directive('focus', function(){});

  // Directive RawName: 'v-marking'
  // Directive Name:    'marking'
  Vue.directive('marking', {
    bind: function(el) {
      el.style.background = '#ff0';
    },
    // Hook Functions
    // bind, inserted, update, componentUpdated, unbind
    unbind: function(el) {
      console.log('unbind directive');
    }
  });

  global.vm = new Vue({
    el: '.app',
    data: {
      is_visible_directive: true
    }
  });

})(window, window.Vue);
