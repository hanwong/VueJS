<template lang="pug">
  #app.container
    .columns
      .column.is-8
        .content
          h1 {{ app.title }}
          p {{ app.desc }}

          button(
            type="button"
            @click="showMessage"
          ).button.is-large show message component

      .colum.is-4
        transition(name="fade" mode="out-in")
          .notification.is-primary(v-if="is_show_noti")
            p
            | Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            | Animi unde enim dolorem quae dolore placeat quia architecto modi
            | at nisi ipsum, neque non hic nostrum velit, adipisci consequuntur esse necessitatibus.
            button(
              type="button"
              @click="is_show_noti = false"
            ).delete
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      is_show_noti: false,
      app: {
        title: 'Vue.js Transition',
        desc: 'Vue.js의 트랜지션을 학습해봅니다.'
      }
    }
  },
  methods: {
    showMessage() {
      this.is_show_noti = true;
    }
  },
  computed: {

  }
}
</script>

<style lang="sass">
#app
  background: #eee

.fade-enter,
.fade-leave-to
  opacity: 0
.fade-enter-active,
.fade-leave-active
  transition: all 0.4s ease
</style>
