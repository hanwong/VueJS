<template lang="pug">
  #app
    h1 {{ name }}
    app-nav(:contents="contents")
</template>

<script>
// 컴포넌트 객체 불러오기
import AppNav from './components/AppNav.vue';

export default {
  name: 'app',
  // 로컬 컴포넌트 객체 설정
  components: {
    'app-nav': AppNav
  },
  // App 컴포넌트 데이터
  data () {
    return {
      name: 'Vue.js Application using webpack',
      contents: [
        {
          link: 'https://google.com', content:'Google'
        }
      ]
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
