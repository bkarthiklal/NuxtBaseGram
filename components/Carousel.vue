<template>
  <VueSlickCarousel
    v-if="postLinks.length"
    class="post-slider"
    v-bind="settings"
  >
    <div v-for="(post, index) in postLinks" :key="index">
      <div
        class="image-container"
        :style="{ backgroundImage: 'url(' + post.link + ')' }"
      >
        <img :src="post.link" />
      </div>
    </div>
  </VueSlickCarousel>
</template>

<script>
export default {
  name: 'CarouselBlock',
  props: {
    postLinks: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
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
}
</script>