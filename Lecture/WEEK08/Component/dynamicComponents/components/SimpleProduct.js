/*! SimpleProduct.js @ 2017, yamoo9.net */

(function(global, _){
  'use strict';

  // 뷰 컴포넌트로 사용할 객체
  _.SimpleProduct = {
    template: `
      <article class="product column is-half">
        <h4 class="product-name title is-4">{{product.name}}</h4>
        <p class="product-desc">{{product.description}}</p>
      </article>
    `,
    props: {
      product: {
        required: true,
        type: Object
      }
    }
  };

})(window, (window.y9 = window.y9 || {}) );