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
    bind: function(el, o) {
      var value = o.value || '#333';
      var delay = o.modifiers.delay || 0;
      if ( o.modifiers.animate ) {
        el.style.transition = 'all 1s ease';
      }
      if ( o.modifiers.delay ) {
        delay = 1000;
      }
      global.setTimeout(function(){
        el.style[o.arg] = value;
      }, delay);
    },
    update: function(el, binding, newV, oldV) {
      console.log('update');
      el.style[binding.arg] = 'maroon';
    },
    // Hook Functions
    // bind, inserted, update, componentUpdated, unbind
    unbind: function(el) {
      console.log('unbind directive');
      // $('body').css({
      //   height: '100vh',
      //   transition: 'all 1s ease-out',
      //   background: '#3273dc'
      // });
      global.document.body.style.height = '100vh';
      global.document.body.style.transition = 'all 1s ease-out';
      global.document.body.style.background = '#3273dc';
    }
  });

  Vue.directive('custom', function(el, binding, vNode){
    // Hook: bind / update
    console.log(binding.value);
  });

  global.vm = new Vue({
    el: '.app',
    data: {
      is_visible_directive: true,
      numbers: [
        'coffee',
        'cafe',
        'mocha'
      ]
    },
    components: {
      mySpan: {
        props: {
          data: {
            type: Array,
            default: []
          }
        },
        template: '\
          <div>\
            <span\
              class="my-span"\
              v-marking:color.animate.delay="\'lightgreen\'"\
              @click="$emit(\'call\')"\
              v-for="item in data"> {{item}} </span>\
          </div>\
        '
      }
    }
  });

})(window, window.Vue);
