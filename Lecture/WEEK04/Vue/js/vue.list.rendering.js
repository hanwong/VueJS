(function(global, Vue){
  'use strict';

  var default_classmate = {
    name: '',
    age: null,
    school: {
      name: ''
    },
    major: ''
  };

  global.demo = new Vue({
    el: '.demo',
    data: {
      is_block_show: true,
      using_register: false,
      class_name: 'front-end design camp',
      // fdc: front-end design camp
      fdc: classUsingArray, // [{}, {}, {}, ...] length: 10
      classmate: Object.assign({}, default_classmate)
    },
    // Vue 인스턴스 메서드
    methods: {
      toggleRegister: function() {
        this.using_register = !this.using_register;
      },
      inputChangeRegister: function(e) {
        var input = e.target;
        var value = input.value;
      },
      registerClassmate: function() {
        this.fdc.unshift(this.classmate);
        // 사용자가 입력한 내용을 초기화할 수 있을까?
        // 객체 합성 패턴을 활용하여 초기화
        this.classmate = Object.assign({}, default_classmate);
      }
    }
  });

})(window, window.Vue);