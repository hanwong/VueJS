/*! vue.event.binding.key.js © yamoo9.net, 2017 */
;(function(global, Vue){
  'use strict';

  // 사용자 정의 키 수식어 설정
  Vue.config.keyCodes.f1 = 112;

  new Vue({
    el: '.demo',
    data: {
      headline: 'Vue.js Application',
      query: '',
      directory: [
        {
          href: 'http://google.com',
          label: 'Google',
          external: true,
          active: false,
        },
        {
          href: 'http://naver.com',
          label: 'NAVER',
          external: false,
          active: true,
        },
        {
          href: 'http://css-tricks.com',
          label: 'CSS Tricks',
          external: true,
          active: false,
        },
      ]
    },
    computed: {
      reverseHeadline: function() {
        return this.headline.split('').reverse().join('');
      }
    },
    methods: {
      reverseText: function(text) {
        return text.split('').reverse().join('');
      },
      addInputItem: function(e) {
        var t = e.target;
        var v = t.value.trim();
        if ( v === '' ) { return; }
        this.directory.push(v);
        t.value = '';
      },
      addItem: function(e) {
        var t = e.target.localName === 'input' ? e.target : e.target.previousElementSibling;
        var v = t.value.trim();
        if ( v === '' ) {return;}
        this.directory.push(v);
        t.value = '';
      },
      instantSearch: function(e){
        this.query = e.target.value;
      }
    }
  });


})(window, window.Vue);
