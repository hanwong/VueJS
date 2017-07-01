/*! vue.start.js © yamoo9.net, 2017 */
;(function(global, Vue){
  'use strict';

  // 컴포넌트로 사용할 객체(JavaScript 객체일 뿐)
  var comp = {
    template: '<div>{{value}}</div>',
    created: function() {
      console.log('<vue-comp> 컴포넌트 생성');
    },
    data: function(){
      return {
        value: 'Vue Component'
      };
    }
  };
  // 전역 컴포넌트 등록 (간혹 또는 플러그인에서 사용됨)
  // Vue.component('vue-comp', comp);

  // 테스크 수행하는 컴포넌트 등록
  // 자식 컴포넌트
  var Task = {
    // template: '<li class="task"><slot></slot></li>',
    template: '<li class="task">\
      <label> <input type="checkbox" :checked.sync="child_item.finished"> {{child_item.content}}</label>\
    </li>',
    // 자식 컴포넌트는 부모 컴포넌트로 부터
    // 데이터를 전달 받을 수 있다.
    // props를 사용하여 단, 단방향 통신이다.
    // 자식은 부모의 속성을 함부로 변경하면 안된다.
    // 그럼 어떻게 하나?
    // 자식이 부모에게 변경이 필요함을 이벤트로 알린다.
    // props: ['content', 'fin']
    // props: ['item'],
    props: {
      item: {
        type: Object,
        required: true,
        validator: function(value) {
          var result = 'content' in value && 'finished' in value;
          if (!result) {
            throw "content, finished 속성이 반드시 포함되어 있어야 합니다.";
          }
          // 객체의 속성 타입 검증
          if (
            typeof value.content !== 'string' ||
            typeof value.finished !== 'boolean'
          ) {
            throw 'content는 문자열로, finished 속성은 불리언으로 설정해야 합니다.';
          }
          return result;
        }
        // default: function(){
        //   return {
        //     content: '할 일',
        //     finished: false
        //   };
        // }
      }
    },
    // 방법 1
    // data: function() {
    //   return {
    //     child_item: Object.assign({}, this.item)
    //   }
    // },
    // 방법 2
    computed: {
      child_item: function() {
        return Object.assign({}, this.item);
      }
    }
  };
  // 부모 컴포넌트
  var Tasks = {
    components: { task: Task },
    template: '\
      <ul class="tasks">\
        <task :item="item" :key="\'task-\'+index" v-for="(item, index) in items"></task>\
      </ul>\
    ',
    data: function(){
      return {
        items: [
          {content: '조깅', finished: false},
          {content: '신문 읽기', finished: false},
          {content: '사무실 청소', finished: true},
          {content: '아침 회의', finished: false},
          // { content: 1234, finished: [] }
        ]
      }
    }
  };

  // 루트 뷰 인스턴스 생성
  new Vue({
    el: '.app',
    // 지역 컴포넌트 등록 (자주 사용)
    components: {
      'vue-comp': comp,
      'tasks': Tasks
    }
  });


})(window, window.Vue);
