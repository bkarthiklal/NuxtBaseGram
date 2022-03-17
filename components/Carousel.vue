<template>
  <VueSlickCarousel v-if="hasDefaultSlot" class="post-slider" v-bind="settings">
    <slot />
  </VueSlickCarousel>
</template>

<script>
export default {
  name: 'CarouselBlock',
  data() {
    return {
      settings: {
        arrows: false,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: false,
        // speed: 2000,
        // autoplaySpeed: 5000,
        cssEase: 'linear',
        pauseOnDotsHover: true,
        pauseOnFocus: true,
        pauseOnHover: true,
        swipe: true,
        swipeToSlide: true,
        draggable: true,
      },
    }
  },
  computed: {
    hasDefaultSlot() {
      return !!this.$slots.default
    },
  },
}
</script>