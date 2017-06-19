/*! vue.start.js © yamoo9.net, 2017 */
;(function(global, Vue){
  'use strict';

  new Vue({
    el: '.filter-sort-table-demo',
    data: {
      people: people,
      search: '',
      people_heading: 'gender email phone nat cell'.split(' '),
      sort_key: '',
      sort_order: {
        gender: 1,
        email: 1,
        phone: 1,
        nat: 1,
        cell: 1
      }
    },
    created: function() {
      var headings = this.people_heading;
      this.people = this.people.map(function(person){
        var name = person.name;
        person.name.full = name.first + ' ' + name.last;
        return person;
      });
      this.people = this.people.map(function(person){
        var content = {};
        headings.forEach(function(item){
          content[item] = person[item];
        });
        return content;
      });
    },
    methods: {
      sortBy: function(key){
        this.sort_key = key;
        this.sort_order[key] = this.sort_order[key] * -1;
      },
      changeOrderLabel: function(key) {
        return this.sort_order[key] > 0 ? 'Show Descending Order' : 'Show Ascending Order';
      },
      changeOrderClass: function(key) {
        return this.sort_order[key] > 0 ? 'dsc' : 'asc';
      }
    },
    computed: {
      filteredPeople: function() {
        var filtered   = this.people;
        var search_key = this.search;
        var sort_key   = this.sort_key;
        var order      = this.sort_order[sort_key];
        // 사용자 입력 값이 있을 경우
        if ( search_key ) {
          filtered = filtered.filter(function(person) {
            var keys = Object.keys(person); // [ gender email phone ]
            return keys.some(function(key){
              // 정규 표현식 활용 파트 추가
              var person_key = String(person[key]).toLowerCase();
              if ( search_key === 'male' ) {
                return /^male/.test( person_key );
              } else {
                return person_key.indexOf(search_key) > -1;
              }
            });
          });
        }
        // 정렬 버튼을 누른 경우
        if ( sort_key ) {
          filtered = filtered.slice().sort(function(a, b){
            // console.log('a: %s, b: %s', a[sort_key], b[sort_key]);
            a = a[sort_key];
            b = b[sort_key];
            return (a<b ? -1 : a>b ? 1 : 0) * order;
          });
        }
        return filtered;
      }
    }
  });

})(window, window.Vue);
