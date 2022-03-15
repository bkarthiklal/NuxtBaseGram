<template>
  <div class="filter-type">
    <p>{{ filter.name }}</p>
    <div
      class="img"
      :class="filter.name"
      :style="{ backgroundImage: 'url(' + image + ')' }"
      @click="selectFilter"
    ></div>
  </div>
</template>

<script>
// import EventBus from '../event-bus.js'

export default {
  name: 'FilterType',
  props: {
    filter: {
      type: Object,
      default: null,
    },
    image: {
      type: String,
      default: '',
    },
  },
  methods: {
    selectFilter() {
      // EventBus.$emit('filter-selected', { filter: this.filter.name })
    },
  },
}
</script>

<style lang="scss" src="@/scss/filter-type.scss">
// Styles from stylesheet
</style>
