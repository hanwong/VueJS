/*! vue.event.binding.key.js © yamoo9.net, 2017 */
;(function(global, Vue){
  'use strict';

  new Vue({
    el: '.demo',
    data: {
      query: '',
      directory: '파스타 피자 리조또 콜라 사이다'.split(' ')
    },
    methods: {
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
