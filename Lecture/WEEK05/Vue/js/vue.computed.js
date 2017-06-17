/*! vue.computed.js @ 2017, yamoo9.net */
(function(global, Vue){
  'use strict';

  new Vue({
    el: '.demo',
    data: {
      people: people,
      search_query: ''
    },
    computed: {

    },
    methods: {
      personName: function(person) {
        return person.name.first + ' ' + person.name.last;
      }
    }
  });

})(window, window.Vue);