<template>
  <div class="phone-body">
    <div v-if="step === 1" v-dragscroll.y class="feed">
      <vuegram-post
        v-for="post in posts"
        :key="posts.indexOf(post)"
        :post="post"
      >
      </vuegram-post>
    </div>
    <div v-if="step === 2">
      <div
        class="selected-image"
        :class="selectedFilter"
        :style="{ backgroundImage: 'url(' + image + ')' }"
      ></div>
      <div v-dragscroll.x class="filter-container">
        <filter-type
          v-for="filter in filters"
          :key="filters.indexOf(filter)"
          :filter="filter"
          :image="image"
        >
        </filter-type>
      </div>
    </div>
    <div v-if="step === 3">
      <div
        class="selected-image"
        :class="selectedFilter"
        :style="{ backgroundImage: 'url(' + image + ')' }"
      ></div>
      <div class="caption-container">
        <textarea
          class="caption-input"
          placeholder="Write a caption..."
          type="text"
          :value="value"
          @input="$emit('input', $event.target.value)"
        >
        </textarea>
      </div>
    </div>
  </div>
</template>

<script>
import VuegramPost from './VuegramPost'
import FilterType from './FilterType'

export default {
  name: 'PhoneBody',
  components: {
    'vuegram-post': VuegramPost,
    'filter-type': FilterType,
  },
  props: {
    step: {
      type: Number,
      required: true,
    },
    posts: {
      type: Array,
      required: true,
    },
    filters: {
      type: Array,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    selectedFilter: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" src="@/scss/phone-body.scss">
// Styles from stylesheet
</style>
