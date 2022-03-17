<template>
  <main class="container content box">
    <form method="post" @submit.prevent="onSubmit">
      <!-- User name -->
      <div v-show="false" class="field">
        <label class="label" for="the_name">User Name</label>
        <input
          id="the_name"
          v-model="userName"
          disabled
          type="text"
          class="input"
        />
      </div>
      <!-- User Image  -->
      <div v-show="false" class="field">
        <label class="label" for="the_image">User Image</label>
        <input
          id="the_image"
          v-model="userImage"
          disabled
          type="url"
          class="input"
        />
      </div>
      <!-- Caption -->
      <div class="field">
        <label class="label" for="the_caption">Post caption</label>
        <input id="the_caption" v-model="caption" type="text" class="input" />
      </div>
      <div v-for="(content, index) in contentArray" :key="index" class="field">
        <label class="label">Contents [{{ index + 1 }}]</label>
        <input v-model="contentArray[index].link" class="input" />
      </div>

      <div class="field">
        <input type="submit" class="button is-primary" />
        <button
          type="button"
          class="button is-primary"
          @click.prevent="addField"
        >
          Add Field
        </button>
      </div>
    </form>
  </main>
</template>

<script>
export default {
  name: 'CreatePostPage',
  data() {
    return {
      userName: 'Admin',
      userImage:
        'https://i0.wp.com/www.cssscript.com/wp-content/uploads/2020/12/Customizable-SVG-Avatar-Generator-In-JavaScript-Avataaars.js.png?fit=438%2C408&ssl=1',
      // userImage: 'https://www.techgentsia.com/img/logo.png',
      caption: '',
      contentArray: [],
    }
  },
  methods: {
    onSubmit() {
      const { userName, userImage, caption, contentArray } = this
      if (userName && userImage && caption && contentArray.length) {
        this.createPost()
      } else {
        alert('All fields are required')
      }
    },
    createPost() {
      const postObj = {
        userName: this.userName,
        userImage: this.userImage,
        caption: this.caption,
        createdAt: new Date().getTime(),
        postLinks: this.contentArray,
      }
      this.$store
        .dispatch('posts/addPost', postObj)
        .then((res) => {
          /** Clear fields and success alert */
          alert('Post created successfully')
          this.resetFields()
        })
        .catch((err) => {
          /** Error  alert */
          alert('Error in create post')
          // eslint-disable-next-line no-console
          console.log(err)
        })
    },
    resetFields() {
      Object.assign(this.$data, this.$options.data.call(this))
    },
    addField() {
      this.contentArray.push({
        link: '',
        type: 'image',
      })
    },
  },
}
</script>
