/*! Tabs.js @ 2017, yamoo9.net */
(function(global, Vue){
  'use strict';

  Vue.Tabs = {
    template: `
      <div class="tab-container">
        <div class="tabs">
          <ul role="tablist">
            <li
              role="presentation"
              v-for="tab in tabs"
              :class="{'is-active': tab.is_selected}"
            >
              <a
                @click.prevent="selectTab(tab)"
                href
                role="tab">{{tab.headline}}</a>
            </li>
          </ul>
        </div>
        <div class="tabpanels">
          <slot></slot>
        </div>
      </div>
    `,
    mounted: function(){
      this.tabs = this.$children;
    },
    data: function() {
      return {
        tabs: []
      }
    },
    methods: {
      selectTab: function(selected_tab) {
        this.tabs.forEach(function(tab){
          tab.is_selected = selected_tab.headline === tab.headline;
        });
      }
    }
  };

})(window, window.Vue);