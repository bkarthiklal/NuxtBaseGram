import { firestoreAction } from 'vuexfire'

export const state = () => ({
  postsList: [],
})

export const getters = {
  getPosts: (state, _getters, rootState) => {
    const postsList = state.postsList.map((post) => {
      return {
        id: post.id,
        ...post,
      }
    })
    return postsList || []
  },
}

export const mutations = {
  setPostsBind: (state, bind) => {
    state.postsBind = bind
  },
}

export const actions = {
  bindPosts: firestoreAction(async function ({
    bindFirestoreRef,
    commit,
    state,
    rootGetters,
  }) {
    let ref = this.$fire.firestore.collection('postsList')
    ref = ref.orderBy('createdAt', 'desc').limit(10)
    await bindFirestoreRef('postsList', ref, { wait: true })
    commit('setPostsBind', true)
  }),

  unbindPosts: firestoreAction(function ({ unbindFirestoreRef, commit }) {
    unbindFirestoreRef('postsList', false)
    commit('setPostsBind', false)
  }),

  async getPost({ getters, rootState }, id) {
    let post = getters.getPosts.find((post) => post.id === id)
    if (post) {
      return post
    }
    post = await this.$fire.firestore.collection('postsList').doc(id).get()
    const postData = post.data()
    return {
      id: post.id,
      ...postData,
    }
  },

  async addPost({ getters, rootState }, postData) {
    try {
      return await this.$fire.firestore
        .collection('postsList')
        .doc()
        .set(postData)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
      return e
    }
  },
}
