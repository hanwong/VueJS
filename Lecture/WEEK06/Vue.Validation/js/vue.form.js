/*! vue.form.js © yamoo9.net, 2017 */
;(function(global, Vue){
  'use strict';

  var container, formContainer;

  new Vue({
    el: '.demo',
    data: {
      // UI 펼쳐진 상태
      is_expand: false,
      // 전송 상태
      is_submited: false,
      // 사용자 입력 정보를 담은 객체
      inputs: {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
    },
    methods: {
      expandForm: function() {
        this.is_expand = true;
        container = this.$el;
        container.classList.add('show-form-overlay');
        formContainer = container.querySelector('.form-container');
        formContainer.classList.add('expand');
      },
      foldForm: function() {
        this.is_expand = false;
        container.classList.remove('show-form-overlay');
        formContainer.classList.remove('expand');
      },
      onSubmitData: function() {
        // data {} 폼 데이터 속성에 접근: inputs
        var invalid = true;
        var inputs = this.inputs;
        // 순환 처리
        // for( var prop in inputs ) {
        //   if ( inputs.hasOwnProperty(prop) ) {
        //     var value = inputs[prop];
        //   }
        // }
        // 유효성 검사
        // inputs.name 값이 비어져 있지는 않은지?
        if ( !inputs.name ) {  }
        // inputs.email 값이 이메일로 유효한지
        // inputs.subject 값이 선택되었는지?
        // inputs.message 값이 비어져 있지는 않은지?
      }
    }
  });

})(window, window.Vue);
