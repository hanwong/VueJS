/*! vue.start.js © yamoo9.net, 2017 */
;(function(global, Vue){
  'use strict';

  var CountIncreaseButton = {
    template: '\
      <div>\
        <button type="button" @click="increase" class="button is-increase">{{name}}</button>\
        <div class="box clicked-count">{{count}}</div>\
      </div>\
    ',
    props: ['name'],
    data: function(){
      return { count: 0 }
    },
    methods: {
      increase: function() { this.count++; }
    }
  };

  var TotalCount = {
    template: '<div class="total-count">\
      <p class="total-count">총 클릭 수: </p>\
      <slot></slot>\
    </div>'
  };

  new Vue({
    el: '.app',
    components: {
      totalCount: TotalCount,
      countIncreaseButton: CountIncreaseButton
    }
  });


})(window, window.Vue);
