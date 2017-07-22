<template lang="pug">
  nav.app-nav
    ul
      li(v-for="(link,index) in links")
        a(:href="link.href") {{ link.content }}
        button(type="button" @click="removeLink(index)") remove
</template>

<script>
// 글로벌 이벤트 버스 객체 가져오기
import EventBus from '../EventBus.vue';

// 컴포넌트 객체 내보내기
export default {
  // 컴포넌트 이름 설정
  name: 'AppNav',
  // 부모 컴포넌트에서 전달된 속성
  props: ['links'],
  // 라이프 사이클 훅
  created() {
    this.mine_links = this.links.slice();
  },
  // 컴포넌트 데이터
  data() {
    return  {
      mine_links: []
    }
  },
  methods: {
    removeLink(i){
      // links에서 선택한 인덱스의 link를 제거
        // this.links 에서 index에 해당되는 아이템 하나를 제거
        // 자식이 직접 부모의 데이터를 수정했다. (경고!!)
        // this.links.splice(i,1);

      // 방법 1. 라이프사이클 훅을 사용
      // this.mine_links.splice(i,1);

      // 방법 2. 부모에게 알려라
      // this.$emit('removeLink', i);

      // 방법 3. 글로벌 이벤트버스 객체를 사용하자.
      EventBus.$emit('removeLink', i);
      // 방법 3.1. Vuex를 사용하라.
    }
  }
};
</script>
