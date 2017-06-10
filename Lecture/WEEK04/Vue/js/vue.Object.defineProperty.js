/*! vue.Object.defineProperty.js © yamoo9.net, 2017 */
;(function(global, Vue){
  'use strict';

  var temp = {
    name: '임시 객체',
    use: '테스트용'
  };

  // ES5 이전에 속성을 추가할 때
  // 간단하게 속성 추가 가능
  temp.getUsing = function() {};
  // 제거도 쉽게 가능! true
  delete temp.getUsing;

  // Object.defineProperty() 사용하면서 익혀보자
  // Object.defineProperty(객체, '속성', {기술자});
  Object.defineProperty(temp, 'showName', {
    // 필수 키(공통)
    enumerable: false, // for ~ in 확인
    configurable: false, // delete 확인
    // 선택(2중 1개 택일)
    // 객체 데이터 기술
    // value, writable
    value: function() { // temp.showName() 확인
      return this.name;
    },
    writable: false    // temp.showName = [] 확인
  });

  Object.defineProperty(temp, 'nickname', {
    enumerable: true,
    // configurable: false,
    // 객체 데이터 접근 기술
    // get, set
    // 정의할 때는 함수처럼 정의하지만,
    // 사용할 때는 속성처럼 사용된다.
    get: function() {
      return this.name;
    },
    set: function(value) {
      this.name = value;
    }
  });

  // 노출 패턴
  global.temp = temp;

})(window, window.Vue);
