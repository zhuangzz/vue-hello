import axios from 'axios'

const state = {
  all: []
}

const mutations = {
  addComment (state, { text }) {
    // 变更状态
    state.all.push({ text })
  }
}

const actions = {
  addComment ( { commit }, { text } ) {
    axios.post('http://localhost:3008/comments',
      { text }).then(
        res => {
          commit('addComment', { text })
        }
      )
  },
  loadComments ( { commit } ) {
    axios.get('http://localhost:3008/comments')
         .then(
           res => {
             console.log(res.data)
             state.all = res.data
           }
         )
  }
}


export default {
  state,
  mutations,
  actions
}
