import { createStore } from 'vuex'

export default createStore({
  state: {
    cartList: [],
    // isLive: false,
    // i: 0
  },
  getters: {
    cartList(state) {
      return state.cartList;
    }
  },
  mutations: {
    /**
     * 添加购物车
     */
    addClick(state, payload) {
      payload.count += 1;
    },
    addOneClick(state, payload) {
      payload.count = 1;
      state.cartList.push(payload);
    }
  },
  actions: {
    cartClick(context, payload) {
      return new Promise((resolve, reject) => {
        let isLive = context.state.cartList.find(item => item.iid === payload.iid)
        if (isLive) {
          context.commit('addClick', isLive);
          resolve('该商品数量+1')
        } else {
          context.commit('addOneClick', payload);
          resolve('已加入购物车')
        }
      })
    }
  },
  modules: {}
})