/*! vue.instance-template,directives,data-binding.js © yamoo9.net, 2017 */
;(function(global, Vue){
  'use strict';

  // 데이터
  // 데이터 공유
  var cafe_order = global.co = {
    americano: 'sweet drink',
    order_list: '아메리카노 라떼 에스프레소 스무디'.split(' ')
  };

  // Vue 인스턴스 생성(옵션 객체(Plain Object) 전달)
  var vm = global.vm = new Vue({
    // el: '#app', // 마운트
    data: cafe_order, // 값 참조(Pass by Reference): Object, Array, Function
    // template 추가
    template: '#x-template-test'
  });

  // 이후 마운팅
  vm.$mount('#app');

  // 데이터 공유 확인
  console.log('cafe_order.americano === vm.americano:', cafe_order.americano === vm.americano);

  // 데이터 수정
  // 값 복사 (Pass by Value)
  vm.americano = '달콤 쌉싸름한 아이스 아메리카노';
  console.log('cafe_order.americano:', cafe_order.americano); // 확인

  // Vue 인스턴스가 생성될 때 알지 못하는 속성이 추가되었을 때
  // 과연? Vue는 참조된 객체의 새로운 속성을 반응형 관리(Reactivity System)를 하는가?
  cafe_order.latte = '부드러운 우유 향기~ 핫 카페라떼';
  console.log('vm.latte:', vm.latte); // 확인: undefined

})(window, window.Vue);

(function(global, Vue){
  'use strict';

  // 전역에 공개하는 객체
  global.myObj = {
    prop: 'title'
  };

  // 문(Statement)  VS  식(Expression)
  // var, if, for, while, do...while
  // 문은 값을 반환하지 않아요.
  // 식은 값을 반환합니다. (값을 반환하는 다른 것: 데이터 유형이 함수)



})(window, window.Vue);