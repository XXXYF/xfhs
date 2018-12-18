const tagsView = {
  state: {
    visitedViews: [],
    cachedViews: []
  },
  mutations: {
    ADD_VISITED_VIEWS: (state, view) => {
      console.log(view);
      if (state.visitedViews.some(v => v.path === view.path)) return
      state.visitedViews.push({
        name: view.name,
        path: view.path,
        title: view.meta.title || 'no-name'
      })
      localStorage.pageOpenedList = JSON.stringify(state.visitedViews);
      if (!view.meta.noCache) {
        state.cachedViews.push(view.name)
        localStorage.cachedViews = JSON.stringify(state.cachedViews);
      }

    },
    DEL_VISITED_VIEWS: (state, view) => {
      for (const [i, v] of state.visitedViews.entries()) {
        if (v.path === view.path) {
          state.visitedViews.splice(i, 1)
          localStorage.pageOpenedList = JSON.stringify(state.visitedViews);
          break
        }
      }
      for (const i of state.cachedViews) {
        if (i === view.name) {
          const index = state.cachedViews.indexOf(i)
          state.cachedViews.splice(index, 1)
          localStorage.cachedViews = JSON.stringify(state.cachedViews);
          break
        }
      }
    },
    DEL_OTHERS_VIEWS: (state, view) => {
      for (const [i, v] of state.visitedViews.entries()) {
        if (v.path === view.path) {
          state.visitedViews = state.visitedViews.slice(i, i + 1)
          localStorage.pageOpenedList = JSON.stringify(state.visitedViews);
          break
        }
      }
      for (const i of state.cachedViews) {
        if (i === view.name) {
          const index = state.cachedViews.indexOf(i)
          state.cachedViews = state.cachedViews.slice(index, i + 1)
          localStorage.cachedViews = JSON.stringify(state.cachedViews);
          break
        }
      }
    },
    DEL_ALL_VIEWS: (state) => {
      state.visitedViews = [];
      
      state.cachedViews = [];
      localStorage.pageOpenedList = JSON.stringify(state.visitedViews);
      localStorage.cachedViews = JSON.stringify(state.cachedViews);
    },
    SET_OPENED_LIST (state) {
        state.cachedViews = localStorage.cachedViews ? JSON.parse(localStorage.cachedViews) : state.cachedViews;
        state.visitedViews = localStorage.pageOpenedList ? JSON.parse(localStorage.pageOpenedList) : state.visitedViews;
        console.log(state.pageOpenedList)
    },
  },
  actions: {
    setOpenedList({ commit }, view) {
        commit('SET_OPENED_LIST', view)
    },
    addVisitedViews({ commit }, view) {
      commit('ADD_VISITED_VIEWS', view)
    },
    delVisitedViews({ commit, state }, view) {
      return new Promise((resolve) => {
        commit('DEL_VISITED_VIEWS', view)
        resolve([...state.visitedViews])
      })
    },
    delOthersViews({ commit, state }, view) {
      return new Promise((resolve) => {
        commit('DEL_OTHERS_VIEWS', view)
        resolve([...state.visitedViews])
      })
    },
    delAllViews({ commit, state }) {
      return new Promise((resolve) => {
        commit('DEL_ALL_VIEWS')
        resolve([...state.visitedViews])
      })
    }
  }
}

export default tagsView
