/*! vue.data.binding.js © yamoo9.net, 2017 */
;(function(global, Vue){
  'use strict';

  // 모델(데이터, State)
  var frameworks = 'backbone ember sencha vue react angular'.split(' ');
  console.log('frameworks:', frameworks);
  console.log('Array.isArray(frameworks):', Array.isArray(frameworks));
  // 뷰 인스턴스 생성
  // 인스턴스 생성을 위한 옵션 객체를 전달
  global.vm = new Vue({
    // DOM 요소에 마운트
    el: '.demo',
    // 데이터를 연결
    data: {
      // 인스턴스 옵션 객체 외부의 데이터를 연결
      frameworks: frameworks,
      // 사용자 입력(인풋)을 받는 요소에 연결할 데이터
      newItem: ''
    }
  });
  // 문서에 템플릿을 설정한 후에 바인딩
  // 뷰 디렉티브 데이터, 템플릿 연결


})(window, window.Vue);
