<template lang="pug">
  #app
    h1 {{ name }}
    app-nav(:links="links" @removeLink="removeLink")
</template>

<script>
// 컴포넌트 객체 불러오기
import AppNav from './components/AppNav.vue';
import EventBus from './EventBus.vue';

export default {
  name: 'app',
  // 로컬 컴포넌트 객체 설정
  components: {
    'app-nav': AppNav
  },
  mounted () {
    EventBus.$on('removeLink', i => {
      this.removeLink(i);
    });
  },
  // App 컴포넌트 데이터
  data () {
    return {
      name: 'Vue.js Application using webpack',
      links: [
        {
          href: 'https://google.com', content:'Google'
        },
        {
          href: 'https://daum.net', content:'DAUM'
        },
        {
          href: 'https://apple.com', content:'Apple'
        },
      ]
    }
  },
  methods: {
    removeLink(i){
      console.log('remove link request by child component');
      this.links.splice(i, 1);
    }
  }
}
</script>

<style lang="sass">
html
  font-size: 100%
  background: #fff
body
  margin: 0
</style>
