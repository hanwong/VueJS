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
    template: '<li class="task"><slot></slot></li>',
  };
  // 부모 컴포넌트
  var Tasks = {
    components: { task: Task },
    template: '\
      <ul class="tasks">\
        <task :key="\'task-\'+index" v-for="(item, index) in items">\
          {{item}}\
        </task>\
      </ul>\
    ',
    data: function(){
      return {
        items: [
          'one', 'two', 'three', 'four'
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
