/*! vue.start.js © yamoo9.net, 2017 */
;(function(global, Vue, _){
  'use strict';

  new Vue({
    el: '.app',
    // 사용자 정의 컴포넌트 등록
    components: {
      detailProduct: _.DetailProduct,
      simpleProduct: _.SimpleProduct
    },
    // 라이프 사이클 훅을 사용해서 Vue 인스턴스 생성 이전 시점에
    // 비동기 요청으로 Vue 인스턴스의 데이터 products로 바인딩
    beforeCreate: function(){
      var vm = this;
      // 비동기 통신(Ajax, Open API: 상품군에 대한 데이터)
      // common/DB/products.js <- API 주소
      var api_url = 'https://hplussport.com/api/products';
      // Ajax 통신을 위한 객체를 생성
      var xhr = new XMLHttpRequest();
      // 이벤트 바인딩
      xhr.addEventListener('readystatechange', function(){
        if ( xhr.status === 200 && xhr.readyState === 4 ) {
          vm.products = JSON.parse(xhr.response); // String -> Object
        }
      });
      xhr.open('GET', api_url);
      xhr.send(null);
    },
    // Vue 인스턴스 데이터
    data: {
      // 비동기 통신으로 데이터가 바인딩 되는 데이터 속성
      products: []
    }
  });

})(window, window.Vue, window.y9);
