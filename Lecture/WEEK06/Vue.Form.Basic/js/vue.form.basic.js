/*! vue.start.js © yamoo9.net, 2017 */
;(function(global, Vue){
  'use strict';

  var vm = new Vue({
    el: '.demo',
    data: {
      user_id: '',
      user_senior_career: 1,
      // user_input: {
      //   name: '',
      //   message: '',
      //   career: '',
      //   field: []
      // }
      user_name: '',
      user_message: '',
      user_career: 'junior',
      user_field: [],             // checkbox
      user_field_select: '',      // <select>
      user_field_select_multi: [], // multiple 속성을 가진 <select>
      options: [
        { value: '', disabled: true },
        { value: 'plan', disabled: false },
        { value: 'design', disabled: false },
        { value: 'frontend', disabled: false },
        { value: 'backend', disabled: false },
      ]
    },
    methods: {
      printOptionValue: function(value) {
        var result = '';
        switch(value) {
          case 'plan':
            result = '웹 기획';
          break;
          case 'design':
            result = '웹 디자인';
          break;
          case 'frontend':
            result = '프론트엔드 개발';
          break;
          case 'backend':
            result = '백엔드 개발';
        }
        return result;
      },
      updateUserMessage: function(e) {
        this.user_message = e.target.value;
      }
    }
  });

  // global.setTimeout(function(){
  //   vm.$mount('.demo');
  //   console.log('demo 마운팅 성공!');
  // }, 3000);

})(window, window.Vue);
