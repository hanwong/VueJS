/*! vue.start.js © yamoo9.net, 2017 */
;(function(global, Vue){
  'use strict';

  new Vue({
    el: '.filter-sort-table-demo',
    data: {
      people: people,
      search: '',
      people_heading: 'picture name gender email phone'.split(' '),
      people_contents: []
    },
    created: function() {
      this.people = this.people.map(function(person){
        var name = person.name;
        person.name.full = name.first + ' ' + name.last;
        return person;
      });
    },
    mounted () {
      var contents = this.people_contents;
      var headings = this.people_heading;
      this.people.forEach(function(person){
        var content = {};
        headings.forEach(function(item){
          content[item] = person[item];
        });
        contents.push(content);
      });
    }
  });

})(window, window.Vue);
