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

}); // (window)

// ------------------------------------
// Virtual DOM 프로세스
// ------------------------------------

// Virtual DOM 모듈 로드
// Server 모듈 로드가 현재 Front-End 환경에서는 적용 안됨.
// 모듈 로드 라이브러리 Browserify 사용.
// 손쉽게 Budo 라는 개발 모듈 사용.
var h             = require('virtual-dom/h');
var createElement = require('virtual-dom/create-element');
var diff          = require('virtual-dom/diff');
var patch         = require('virtual-dom/patch');
// console.log( typeof h ); // function
// console.log( typeof createElement ); // function

// 데이터 변경을 시뮬레이션 하기 위해 카운트 변수 정의
// var count = 0; // 1, 2, 3,  .....

// 배열 데이터를 가지고 실습
var todoList = [
  '일어나서 이불개기',
  '아침 밥 먹기',
  '늦지 않게 출근',
  '열심히 버닝하여 일하기'
];

window.todoList = todoList;

// h(selector, prop_map({}), [text or h()])
// .container
  // h1.todo-title  TodoList
  // ul.todolist
    // li.tidolist-item   {데이터 순환 처리}

// todoList를 처리하기 위한 render() 함수 정의
function render() {
  var headline = h('h1.todo-headline', '오늘 할 일 목록');
  var listItems = todoList.map(function(item, index) {
    return h('li.todolist-item', [
      item,
      h('button.todo-item-delete.button',{
        type: 'button',
        onclick: function(e){
          // todoList 모델 데이터 수정(제거)
          // console.log('index:', index);
          todoList.splice(index, 1);
          // console.log('todoList:', todoList);
          // Virtual DOM의 diff() 함수가 변경 사항을 감지하여
          // Patch 합니다. -> 사용자 화면 뷰 변경
          update();
        }
      }, '제거')
    ]);
  });
  var input = h('input.todo-new-item', {
    type: 'text',
    placeholder: '오늘 할 일을 입력해주세요',
    onkeyup: function(e) {
      // console.log(e.target.value);
      // 사용자가 Enter, Spacebar 를 눌렀을 때만 작동
      var keycode = e.keyCode || e.which;
      if ( keycode === 13 ) {
        // 사용자가 입력한 내용
        var input = e.target;
        var input_value = input.value.trim();
        if ( input_value === '' ) {
          input.value = '';
          return; // 함수 종료
        }
        // todoList에 신규 아이템으로 등록
        todoList.unshift(input_value);
        // 사용자 인터페이스 업데이트 update() 호출
        update();
        // 사용자가 입력한 후, 인풋 필드를 초기화
        input.value = '';
      }
    }
  });
  var addItemBtn = h('button.add-todo-item.button', {
    type: 'button',
    onclick: function(e) {
      // .todo-new-item DOM 객체 Finding
      var input = document.querySelector('.todo-new-item');
      var input_value = input.value;
      // todoList에 신규 아이템으로 등록
      todoList.unshift(input_value);
      // 사용자 인터페이스 업데이트 update() 호출
      update();
      // 사용자가 입력한 후, 인풋 필드를 초기화
      input.value = '';
      // console.log('clicked add todo item button');
    }
  }, '등록');
  var list = h('ul.todolist', listItems);
  var container = h('div.container', [
    headline,
    // [input] input field,
    input,
    // [button] add item
    addItemBtn,
    list
  ]);
  return container;
}

// render 함수 정의
// function render(data) {
//   var _vnode = h('p', {
//     className: 'greeting'
//   }, 'Hello Virtual DOM ' + data);
//   // 제대로 VNode 생성되었느지 검증
//   // console.log(vtree);
//   return _vnode;
// }

// update() 함수 정의
function update() {
  // 이전 V_DOM === vtree
  // 현재 V_DOM 생성 <= h(), render() 함수 재사용
  // var newVtree = render(++count);
  var newVtree = render();
  // 이전 V_DOM, 현재 V_DOM 비교(diff)
  var patches = diff(vtree, newVtree);
  // 비교 결과 변경사항이 존재하면 패치(patch)
  rootNode = patch(rootNode, patches);
  // 현재 DOM을 이전 DOM으로 교체(변경)
  vtree = newVtree;
}

// h() 함수를 사용하여 가상 DOM 트리(VTree) 작성 후, 반환
// var vtree = render(count);
var vtree = render();

// DOM Node 생성 반환
var rootNode = createElement(vtree);
// 생성된 DOM Node 검증
// console.log(rootNode);

// 실제 DOM에 반영
document.body.appendChild(rootNode);

// 시간이 지남에 따라 update() 함수를 실행
// window.setInterval(function(){
//   // 2초 마다 업데이트 수행
//   update();
//   // console.log(++count);
// }, 2000);