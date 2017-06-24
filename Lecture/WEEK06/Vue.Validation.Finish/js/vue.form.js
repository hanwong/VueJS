/*! vue.start.js © yamoo9.net, 2017 */
// http://freefrontend.com/css-forms/#contact-forms
// http://fontawesome.io/cheatsheet/
;(function(global, Vue){
  'use strict';

  var form_container;
  var document = global.document;

  var changePropReadableHuman = function(prop) {
    switch(prop) {
      case 'name': return '이름';
      case 'email': return '이메일';
      case 'subject': return '주제';
      case 'message': return '내용';
    }
  };

  new Vue({
    el: '.demo',
    data: {
      is_expand: false,
      is_submitted: false,
      user: {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
    },
    methods: {
      expandForm: function(e) {
        var target = e.target;
        form_container = target.parentNode;
        form_container.classList.add('expand');
        this.is_expand = true;
        this.$el.classList.add('show-form-overlay');
      },
      foldForm: function() {
        form_container.classList.remove('expand');
        this.is_expand = false;
        this.is_submitted = false;
        this.$el.classList.remove('form-submitted');
        this.$el.classList.remove('show-form-overlay');
      },
      onSubmit: function(e) {
        var invalid = true;
        var user = this.user;
        var value, valid;
        for (var prop in user) {
          if ( user.hasOwnProperty(prop) ) {
            value = user[prop];
            if(prop !== 'email') {
              invalid = value === '';
            } else {
              // 이메일 검증 정규표현식
              // http://emailregex.com/
              valid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
              // 이메일이 올바르지 않다면 invalid 값이 참.
              // 이메일이 올바르다면 invalid 값이 거짓.
              invalid = !valid;
            }
          }
          // 유효성 검사 결과가 올바르지 않다면
          if ( invalid ) {
            // 사용자에게 잘못된 입력 내용을 알린 후,
            global.alert( '"' + changePropReadableHuman(prop) + '" 입력이 잘못 되었습니다. 올바른 값을 입력했는지 확인해보세요.');
            // 해당 요소로 포커스 이동한다.
            var error_el = document.querySelector('#user_' + prop);
            error_el.focus();
            error_el.classList.add('is-error');
            // 함수는 종료 시킨다.
            return;
          }
        }

        // 검사 결과가 올바르면 아래 코드 실행
        this.is_submitted = true;
        this.$el.classList.add('form-submitted');
      }
    }
  });

})(window, window.Vue);
