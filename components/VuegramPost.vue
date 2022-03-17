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

    <section v-if="post.postLinks.length === 1">
      <div v-for="(postLinkData, index) in post.postLinks" :key="index">
        <div
          class="image-container"
          :style="{ backgroundImage: 'url(' + postLinkData.link + ')' }"
        >
          <img :src="postLinkData.link" />
        </div>
      </div>
    </section>
    <Carousel v-else-if="post.postLinks.length > 1">
      <div v-for="(postLinkData, index) in post.postLinks" :key="index">
        <div
          class="image-container"
          :style="{ backgroundImage: 'url(' + postLinkData.link + ')' }"
        >
          <img :src="postLinkData.link" />
        </div>
      </div>
    </Carousel>
    <div v-else class="image-container">
      <img alt="No Data Link" />
    </div>
    <div class="content">
      <div class="heart">
        <i
          class="far fa-heart fa-lg"
          :class="{ fas: hasBeenLiked }"
          @click="like"
        >
        </i>
        <span v-if="(post.likes || []).length" class="likes">
          {{ post.likes.length }} likes
        </span>
      </div>
      <p class="caption">
        <span>{{ post.userName }}</span> {{ post.caption }}
      </p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'VuegramPost',
  props: {
    post: {
      type: Object,
      required: true,
      default: null,
    },
  },
  computed: {
    ...mapGetters(['getUUID']),
    hasBeenLiked() {
      return (this.post.likes || []).includes(this.getUUID)
    },
  },
  methods: {
    ...mapActions('posts', ['toggleLike']),
    like() {
      this.toggleLike({
        ...this.post,
        uuid: this.getUUID,
      })
    },
  },
}
</script>

<style lang="scss" src="@/scss/vuegram-post.scss">
// Styles from stylesheet
</style>
