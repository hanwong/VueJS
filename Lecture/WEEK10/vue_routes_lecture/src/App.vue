<template lang="pug">
  #app
    h1 {{ app_title }}
    h2.subtitle {{ app_subtitle }}
    nav.gnb
      ul
        router-link(to="/" tag="li" exact)
          a(href) Home
        router-link(to="/other" tag="li")
          a(href) Other Home

    transition(name="slide" mode="out-in")
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

#app
  a
    text-decoration: none
    color: tan

.router-link-active
  font-weight: 900
  font-size: 120%

.fade-enter,
.fade-leave-to
  opacity: 0

.fade-enter-active,
.fade-leave-active
  transition: all 0.4s ease-in-out

.slide-enter-active
  animation: slide-in 1s
.slide-leave-active
  animation: slide-out 1s

@keyframes slide-in
  from
    opacity: 0
    transform: translateX(-1000px)
  to
    opacity: 1
    transform: translateX(0px)

@keyframes slide-out
  from
    opacity: 1
    transform: translateX(0px)
  to
    opacity: 0
    transform: translateX(-1000px)

</style>
