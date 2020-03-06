<template lang="pug">
- const links = [
-   {href: 'https://vuejs.org/', text: 'vue'},
-   {href: 'https://vuex.vuejs.org/', text: 'vuex'},
-   {href: 'https://router.vuejs.org/', text: 'vue-router'},
-   {href: 'http://vue-loader.vuejs.org/', text: 'vue-loader'}
- ]
ul
  -for(let o of links)
    li
      a(href=o.href, target="_blank")=o.text
</template>


<script>
export default {
  name: 'site-links',
}
</script>


<style lang="sass">
a
  color: #69c
</style>
