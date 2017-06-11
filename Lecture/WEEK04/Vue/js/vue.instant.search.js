(function(global, Vue){
  'use strict';

  new Vue({
    el: '.instant-search',
    data: {
      query: '',
      dataset: [
        '레몬',
        '레몬 트리',
        '수박',
        '수박 쥬스',
        '해오름',
        '오렌지 쥬스'
      ]
    },
    mounted () {
      this.$el.style.paddingBottom = '4rem';
    },
    methods: {
      filteredQuery: function(e) {
        this.query = e.target.value;
      }
    },
    computed: {
      fiteredDataset: function(){
        return this.dataset.filter(function(item, index){
          return item.indexOf(this.query) > -1;
        }, this);
      }
    }
  });

})(window, window.Vue);