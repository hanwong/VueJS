/*! vue.start.js © yamoo9.net, 2017 */
;(function(global, Vue){
  'use strict';

  global.demo = new Vue({
    el: '.demo',
    data: {
      'user_input': '',
      'eco_system': [
        'vue', 'vuex', 'nuxt'
      ]
    },
    methods: {
      instantIMEInput: function(e){
        // console.log(e.target.value);
        this.user_input = e.target.value;
      },
      changeColor: function(e){
        // 이벤트 수식어
        // v-on:이벤트이름.수식어1.수식어2
        // stop
        // prevent
        // capture
        // self
        // once
        var link = e.target;
        link.style.color = 'lightgreen';
      }
    }
  });


  // 믹스인(Mixin) 패턴
  // 디자인 패턴: 객체를 합성하는 방법
  // jQuery.extend() 유사
  // _.extend() 유사
  // Object.assign() 네이티브 지원
  // IE 미지원
  var a = { name: 'alpha' };
  var b = { name: 'beta', showName: function(){ this.name; } }
  var c = Object.assign({}, b, a);

})(window, window.Vue);
