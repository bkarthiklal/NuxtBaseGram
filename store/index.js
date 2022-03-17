import { vuexfireMutations } from 'vuexfire'
import { DeviceUUID } from 'device-uuid'

export const state = () => ({
  uuid: null,
})

export const getters = {
  getUUID: (state) => state.uuid,
}

export const mutations = {
  setUUID(state, uuid) {
    state.uuid = uuid
  },
  ...vuexfireMutations,
}

export const actions = {
  validateUUID: ({ commit, dispatch }) => {
    const UUID = localStorage.getItem('UUID')
    if (UUID) {
      commit('setUUID', UUID)
    } else {
      dispatch('createUUID')
    }
  },
  createUUID: ({ commit }) => {
    const uuid = new DeviceUUID().get()
    if (uuid) {
      localStorage.setItem('UUID', uuid)
      commit('setUUID', uuid)
    }
  },
}
