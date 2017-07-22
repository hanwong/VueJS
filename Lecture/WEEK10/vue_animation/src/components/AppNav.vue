<template lang="pug">
  nav.app-nav
    ul
      li
        a(href="/") Home
</template>

<script>
// 컴포넌트 객체 내보내기
export default {
  // 컴포넌트 이름 설정
  name: 'AppNav',
  // 부모 컴포넌트에서 전달된 속성
  props: ['contents'],
  // 라이프사이클 훅
  created () {
    console.log('AppNav Created');
    console.log(this.contents[0].link);
  },
  mounted () {
    console.log('AppNav Mounted');
  },
  // 컴포넌트 데이터
  data() {
    return  {}
  }
};
</script>
