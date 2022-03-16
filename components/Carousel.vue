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
        <img :src="post.link" width="300" height="400" />
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

<style lang="scss">
.post-slider {
  .image-container {
    width: 100%;
    height: 100%;
    position: relative;
    display: inline-block;
    overflow: hidden;
    margin: 0;
    img {
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      min-height: 100%;
      min-width: 100%;
      transform: translate(-50%, -50%);
    }
  }
}
</style>