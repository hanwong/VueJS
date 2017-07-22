<template lang="pug">
  #app
    h1 {{ name }}
    app-nav(:links="links" @removeLink="removeLink")
</template>

<script>
// 컴포넌트 객체 불러오기
import AppNav from './components/AppNav.vue';
// 이벤트버스 객체 불러오기
import EventBus from './EventBus.vue';

export default {
  // 컴포넌트 이름 설정
  name: 'app',
  // 로컬 컴포넌트 객체 설정
  components: {
    'app-nav': AppNav
  },
  // 라이프 사이클 훅
  mounted () {
    // 이벤트 버스 객체를 통해 `removeLink` 이벤트 청취(Listening)
    EventBus.$on('removeLink', i => {
      // this === App 컴포넌트
      // App 컴포넌트 메서드 실행
      // payload 전달
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
  // App 컴포넌트 메서드
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
