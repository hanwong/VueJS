<template lang="pug">
  h2 {{ home_title }}
</template>

<script>
export default {
  data(){
    return {
      home_title: 'Home 컴포넌트'
    }
  }
};
</script>

<style lang="sass" scoped>
h2
  color: tan
  font:
    size: 5rem
    weight: 100
    family: "Spoqa Han Sans"
</style>


