/*! vue.start.js © yamoo9.net, 2017 */
;(function(global, Vue){
  'use strict';

  // 글로벌 이벤트버스 객체 생성
  global.EventBus = new Vue();
  // 이벤트버스 객체의 메서드
  // $emit()
  // $on()
  // $off()
  // $once()

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
      increase: function() {
        this.count++;
        // 상위 컴포넌트에 이벤트 발신($emit)
        // this.$emit('increase');
        // 글로벌 이벤트버스 객체에 통보(이벤트 발신)
        global.EventBus.$emit('increase');
      }
    }
  };

  var TotalCount = {
    template: '\
      <div class="total-count-container">\
        <p class="total-count">총 클릭 수: {{total}}</p>\
        <count-increase-button\
          key="index"\
          v-for="(button, index) in buttons"\
          :name="\'카운트 증가 버튼\' + button">\
        </count-increase-button>\
      </div>',
    components: {
      countIncreaseButton: CountIncreaseButton
    },
    beforeCreate: function() {
      var vm = this;
      global.EventBus.$on('increase', function(){
        // console.log('clicked button');
        vm.total++;
      });
      global.setTimeout(function(){
        global.EventBus.$off();
      }, 3000);
    },
    data: function() {
      return {
        total: 0,
        buttons: ['A', 'B']
      }
    },
    methods: {
      detectClicked: function() {
        console.log('detectClicked');
      }
    }
  };

  new Vue({
    el: '.app',
    components: {
      totalCount: TotalCount
    }
  });


})(window, window.Vue);
