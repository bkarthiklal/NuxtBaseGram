<template>
  <div id="app">
    <div class="app-phone">
      <div class="phone-header">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/vue_gram_logo_cp.png"
        />
        <a v-if="step === 2 || step === 3" class="cancel-cta" @click="goToHome">
          Cancel
        </a>
        <a v-if="step === 2" class="next-cta" @click="step++"> Next </a>
        <a v-if="step === 3" class="next-cta" @click="sharePost"> Share </a>
      </div>
      <LoadingCard v-if="!posts.length" />
      <phone-body
        v-else
        v-model="caption"
        :step="step"
        :posts="posts"
        :filters="filters"
        :image="image"
        :selected-filter="selectedFilter"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import PhoneBody from '@/components/PhoneBody'
// import posts from '@/data/posts'
import filters from '@/data/filters'
// import EventBus from './event-bus.js'

export default {
  name: 'IndexPage',
  components: {
    'phone-body': PhoneBody,
  },
  async validate({ store }) {
    await store.dispatch('validateUUID')
    const UUID = store.getters.getUUID
    if (!UUID) {
      // eslint-disable-next-line no-console
      console.error('Missing unique UUID')
      return false
    }
    return true
  },
  data() {
    return {
      step: 1,
      filters,
      image: '',
      selectedFilter: '',
      caption: '',
    }
  },
  computed: {
    ...mapGetters('posts', ['getPosts']),
    posts() {
      return this.getPosts || []
    },
  },
  async mounted() {
    await this.bindPosts()
  },
  methods: {
    ...mapActions('posts', ['bindPosts']),
    uploadImage(evt) {
      const files = evt.target.files
      if (!files.length) return

      const reader = new FileReader()
      reader.readAsDataURL(files[0])
      reader.onload = (evt) => {
        this.image = evt.target.result
        this.step = 2
      }

      // To enable reuploading of same files in Chrome
      document.querySelector('#file').value = ''
    },
    sharePost() {
      const post = {
        username: 'fullstack_vue',
        userImage:
          'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/vue_lg_bg.png',
        postImage: this.image,
        likes: 0,
        caption: this.caption,
        filter: this.filterType,
      }
      this.posts.unshift(post)
      this.goToHome()
    },
    goToHome() {
      this.image = ''
      this.selectedFilter = ''
      this.caption = ''
      this.step = 1
    },
  },
}
</script>

<style lang="scss" src="@/scss/app.scss">
// Styles from stylesheet
</style>
