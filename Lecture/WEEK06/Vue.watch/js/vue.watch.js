/*! vue.start.js © yamoo9.net, 2017 */
;(function(global, Vue){
  'use strict';

  new Vue({
    el: '.demo',
    data: {
      headline: 'Vue Watch Property',
      query: '입력을 기다리고 있습니다.', // 사용자 입력 초기 값
      watched_query: '' // 관찰할 속성의 기본 값
    },
    methods: {
      assignQuery: function(e) {
        this.query = e.target.value;
      }
    },
    // 계산된 속성
    // 값 변경 즉시, 화면에 렌더링
    // UI 변경 시에 적합
    computed: {
      // 계산된 속성 처리
      computed_query: function() {
        return '계산된 속성: ' + this.query;
      }
      // 오류 발생!!!
      // watch 속성과 달리 computed 속성은 data 속성과 동일해서는 안된다.
      // headline: function() {
      //   return 'Computed Vue Property'
      // }
    },
    // 관찰 속성
    // 지연된 시간 이후에 값을 변경한 후, 화면에 렌더링
    // Server 통신 처리 결과를 수행할 때 적합
    watch: {
      // computed 속성과 달리 watch 속성은 data 속성과 동일해도 된다.
      query: function(value, old_value) {
        var vm = this;
        console.log('new: %s, old: %s', value, old_value);
        // 지연된 처리 (서버 처리 시뮬레이션)
        // 1초 뒤에 반응하여 작동
        global.setTimeout(function() {
          vm.watched_query = '관찰 속성: ' + value;
        }, 1000);
      }
    }
  });

})(window, window.Vue);
