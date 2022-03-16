<template>
  <div class="vuegram-post">
    <div class="header level">
      <div class="level-left">
        <figure class="image is-32x32">
          <img :src="post.userImage" />
        </figure>
        <span class="username">{{ post.userName }}</span>
      </div>
    </div>
    <Carousel
      v-if="post.postLinks.length"
      :post-links="post.postLinks"
    ></Carousel>
    <div class="content">
      <div class="heart">
        <i
          class="far fa-heart fa-lg"
          :class="{ fas: post.hasBeenLiked }"
          @click="like"
        >
        </i>
      </div>
      <p v-if="post.likes" class="likes">{{ post.likes }} likes</p>
      <p class="caption">
        <span>{{ post.userName }}</span> {{ post.caption }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VuegramPost',
  props: {
    post: {
      type: Object,
      required: true,
      default: null,
    },
  },
  methods: {
    like() {
      // this.post.hasBeenLiked ? this.post.likes-- : this.post.likes++
      // this.post.hasBeenLiked = !this.post.hasBeenLiked
    },
  },
}
</script>

<style lang="scss" src="@/scss/vuegram-post.scss">
// Styles from stylesheet
</style>
