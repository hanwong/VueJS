<template lang="pug">
  #app
    h1 {{ app_title }}
    h2.subtitle {{ app_subtitle }}
    router-view
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      app_title: 'Vue 라우팅',
      app_subtitle: 'App 컴포넌트'
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
