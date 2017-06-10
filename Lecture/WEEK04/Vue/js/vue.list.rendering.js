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

        // this.classmate.name = '';
        // this.classmate.age = '';
        // this.classmate.major = '';
        // this.classmate.school.name = '';
      }
    },
    // Life Cycle Hook
    mount: function() {
      console.log('Vue 객체(인스턴스) 마운트 이후 시점');

      // ——————————————————————————————————————————————————————————————————————————————————————————
      // Vue.js 방법을 사용하지 않고, DOM 스크립트 + 라이프사이클 훅(mounted)을 사용하여 이벤트 핸들링 (비효율적)
      // ——————————————————————————————————————————————————————————————————————————————————————————

      var document               = global.document;
      var _this                  = this;
      var demo                   = _this.$el; // <div class="demo">
      var register_btn           = demo.querySelector('.button.using-register');

      register_btn.addEventListener('click', toggleRegisterView);

      function toggleRegisterView () {
        _this.using_register = !_this.using_register;
        var register_classmate_btn = demo.querySelector('.register-classmate');
        register_classmate_btn.addEventListener('click', registerClassMate);
      }

      function registerClassMate(e) {
        var inputs = demo.querySelectorAll('input');
        var dataset = [];
        Array.prototype.forEach.call(inputs, function(item){
          dataset.push(item.value.trim() || null);
          item.value = '';
        });
        addListItem({
          name: dataset[0],
          age: dataset[1],
          major: dataset[2],
          school: {name: dataset[3]}
        });
      }

      function addListItem(classmate) {
        _this.fdc.unshift(classmate);
      }

    }
  });

})(window, window.Vue);