<template lang="pug">
  #app.container
    .columns
      .column.is-8
        h1.title.is-2
          a(
            href=""
            role="button"
            @click.prevent="msg='pug style markup'"
          ) {{ msg }}
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Vue.js CLI 프로그램'
    }
  }
}
</script>

<style lang="sass">
body
  margin: 0
  background: #fff

#app
  min-height: 100vh
  background: #333
  color: #fff
</style>
