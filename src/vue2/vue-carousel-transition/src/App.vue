<template lang="pug">
#app
  carousel(
    :autoplay="true"
    :autoplay-timeout="2000"
    :per-page="1"
    :loop="true"
    paginationPosition="bottom-overlay"
  )
    slide(v-for="(o, i) in images" :key="i")
      img(:src="o.src" :alt="o.alt")
</template>


<script>
import { Carousel, Slide } from 'vue-carousel'

export default {
  name: 'app',

  components: {
    Carousel,
    Slide
  },

  mounted: function(){
    const slides = this.$el.querySelectorAll('.VueCarousel-slide')
    slides[0].classList.add('VueCarousel-slide-active')
  },

  data: function(){
    return {
      images: [
        {src: './images/img0.jpg', alt: ''},
        {src: './images/img1.jpg', alt: ''},
        {src: './images/img2.jpg', alt: ''},
        {src: './images/img3.jpg', alt: ''},
      ]
    }
  },
}
</script>


<style lang="sass">
#app
  max-width: 100%
  margin-left: auto
  margin-right: auto
  img
    width: 100%
    height: auto

.VueCarousel-wrapper
  overflow: visible

.VueCarousel-inner
  min-height: 240px!important
  width: 100%!important
  margin-left: auto!important
  margin-right: auto!important
  transform: translate(0)!important
  transition: none!important
  flex-basis: auto!important
  display: block!important
  opacity: 1
  position: relative

.VueCarousel-slide
  transition: opacity .5s ease-in-out .5s
  opacity: 0
  position: absolute
  left: 0
  right: 0
  width: 100%
  margin: auto

.VueCarousel-slide-active
  opacity: 1
</style>
