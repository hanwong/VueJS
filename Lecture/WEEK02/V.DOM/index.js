(function(global){
  'use strict';

  // ------------------------------------------------------
  // DOM Script 프로세스 <-- 실제(Actual) DOM
  // ------------------------------------------------------
  var document = global.document;
  var body = document.querySelector('body');
  // 단락 요소 노드 생성
  var p_node = document.createElement('p');
  // 단락 요소 노드 클래스 속성 설정
  p_node.classList.add('greeting');
  // 텍스트 노드 생성
  var p_text = document.createTextNode('Hello Virtual DOM');
  // 단락 <- 텍스트 마운트
  p_node.appendChild(p_text);
  // 실제 돔 객체에 마운트
  // body.appendChild(p_node);
  body.insertAdjacentElement('afterbegin', p_node);

}(window));

// ------------------------------------
// Virtual DOM 프로세스
// ------------------------------------

// Virtual DOM 모듈 로드
// Server 모듈 로드가 현재 Front-End 환경에서는 적용 안됨.
// 모듈 로드 라이브러리 Browserify 사용.
// 손쉽게 Budo 라는 개발 모듈 사용.
var h             = require('virtual-dom/h');
var createElement = require('virtual-dom/create-element');
// console.log( typeof h ); // function
// console.log( typeof createElement ); // function

// h() 함수를 사용하여 가상 DOM 트리(VTree) 작성 후, 반환
var vtree = h('p', {
  className: 'greeting'
}, 'Hello Virtual DOM');
// 제대로 VNode 생성되었느지 검증
// console.log(vtree);

// DOM Node 생성 반환
var rootNode = createElement(vtree);
// 생성된 DOM Node 검증
console.log(rootNode);

// 실제 DOM에 반영
document.body.appendChild(rootNode);