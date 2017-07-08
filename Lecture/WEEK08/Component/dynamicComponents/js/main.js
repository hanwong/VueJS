/*! vue.start.js © yamoo9.net, 2017 */
;(function(global, Vue){
  'use strict';

  new Vue({
    el: '.app',
    mounted: function(){
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
    data: {
      products: []
    }
  });

})(window, window.Vue);
