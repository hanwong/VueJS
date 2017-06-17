/*! vue.start.js © yamoo9.net, 2017 */
;(function(global, Vue){
  'use strict';

  new Vue({
    el: '.filter-sort-table-demo',
    data: {
      people: people,
      search: '',
      people_heading: 'gender email phone'.split(' '),
      sort_key: '',
      sort_order: {
        gender: 1,
        email: 1,
        phone: 1
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
    }
  });

})(window, window.Vue);
