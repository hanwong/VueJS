/*! vue.computed.js @ 2017, yamoo9.net */
(function(global, Vue){
  'use strict';

  new Vue({
    el: '.demo',
    data: {
      people: people,
      search_query: ''
    },
    // Life Cycle Hook
    created: function() {
      // forEach  VS  map  VS  filter
      this.people = this.people.map(function(person, index){
        // 조작: full 속성을 person.name 속성으로 설정
        var name = person.name;
        person.name.full = name.first + ' ' + name.last;
        return person;
      });
    },
    computed: {
      filteredPeople: function() {
        var q = this.search_query;
        return this.people.filter(function(person){
          var name  = person.name;
          // 방법 1.
            // var first = name.first.toLowerCase().indexOf(q) > -1;
            // var last  = name.last.toLowerCase().indexOf(q) > -1;
            // return first || last;
          // 방법 2.
            // var full  = name.first + ' ' + name.last;
            // var full_check = full.toLowerCase().indexOf(q) > -1;
            // return full_check;
          // 방법 3.
          return name.full.toLowerCase().indexOf(q) > -1;
        });
      }
    },
    methods: {
      searchResult: function(people) {
        // 사용자가 입력한 값
        var search = this.search_query.toLowerCase();
        people = people.filter(function(person){
          var result_first = person.name.first.toLowerCase().indexOf(search) > -1;
          var result_last = person.name.last.toLowerCase().indexOf(search) > -1;
          console.log('first: %s, last: %s', result_first, result_last);
          return result_first || result_last;
        }, this);
        return people;
      },
      personName: function(person) {
        return person.name.first + ' ' + person.name.last;
      }
    }
  });

})(window, window.Vue);