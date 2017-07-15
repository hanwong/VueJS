/*! vue.start.js © yamoo9.net, 2017 */
;(function(global, Vue){
  'use strict';

  // 믹스인 객체
  var hello = {
    created: function() {
      console.log('Hello Created');
      this.greet();
    },
    data: function() {
      return {
        message: 'Hello Mixin :-)'
      }
    },
    methods: {
      greet: function() {
        console.log(this.message);
      }
    }
  };

  // TodoList Application
  // Component Extend
  // Mixin Object
  var TodoList = {
    userOptions: {
      className: 'extend-todolist'
    },
    props: {
      list: {
        type: Array,
        required: true
      }
    },
    data: function(){
      return {
        filter_query: ''
      }
    },
    computed: {
      filtered_data: function(){
        return this.list.filter(function(item){
          return item.match(this.filter_query);
        }, this);
      }
    }
  }

  // 각 컴포넌트에서 공통된 믹스인 객체를 합성
  Vue.component('todos', {
    mixins: [TodoList],
    template: '<div class="todos"></div>'
  });
  Vue.component('doLists', {
    mixins: [TodoList],
    template: '<div class="do-lists"></div>'
  });
  Vue.component('itsItems', {
    mixins: [TodoList],
    template: '<div class="its-items"></div>'
  });

  // 확장된 Vue 컴포넌트 생성자 확장
  // 믹스인 등록
  var MyHello = Vue.extend({
    mixins: [hello]
  });

  // 확장된 Vue 컴포넌트 생성자를 통해 컴포넌트 객체 생성
  // new MyHello();
  // new MyHello();
  // new MyHello();
  // new MyHello();

  // 전역 믹스인 등록
  Vue.mixin({
    mounted: function() {
      console.log('mounted');
      var options = this.$options.userOptions;
      // 사용자 정의 옵션이 있을 경우, 처리
      if ( options ) {
        this.$el.classList.add( options.className || 'default' );
        this.$el.insertAdjacentHTML('beforeend', '<figure><figcaption>summary</figcaption></figure>');
      }
    }
  });

  global.app = new Vue({
    el: '.app',
    mixins: [hello],
    // 사용자 정의 옵션 설정
    userOptions: {
      className: 'root-vue-instance'
    },
    created: function() {
      // console.log('Vue LifeCycle Hook: Created');
    },
    data: {
      message: 'this is not mixin message.'
    },
    methods: {
      greet: function() {
        console.log('Vue Power:', this.message);
      }
    }
  });

  // app.greet();

})(window, window.Vue);
