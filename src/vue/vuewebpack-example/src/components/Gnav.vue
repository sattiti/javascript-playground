<template lang="pug">
- const navs = [
-   {href: 'home', text: 'Home'},
-   {href: 'about', text: 'About'},
-   {href: 'contact', text: 'Contact'},
-   {href: 'question', text: 'Question'}
- ]
nav
  ul
    -for(let o of navs)
      li
        router-link(to=`${o.href}`)=o.text
</template>


<script>
export default {
  name: 'gnav'
}
</script>


<style lang="sass" scoped>
nav
  ul
    display: flex
    display: -ms-flexbox
    justify-content: space-around
    list-style: none
    margin-left: 0
a
  color: #69c
</style>
