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
      if (state.cartList.length == 0) {
        payload.count = 1;
        state.cartList.push(payload);
      } else {

        /**
         * 法一：麻烦一点
         */
        // for (let i = 0; i < state.cartList.length; i++) {
        //   state.isLive = state.cartList[i].iid.indexOf(payload.iid) !== -1;
        //   if (state.isLive) {
        //     state.i = i;
        //     break;
        //   }
        // }
        // if (state.isLive) {
        //   state.cartList[state.i].count += 1;
        //   state.isLive = false;
        // } else {
        //   payload.count = 1;
        //   state.cartList.push(payload);
        // }

        /**
         * 法二：方便
         */
        let isLive = state.cartList.find(item => item.iid === payload.iid)
        if (isLive) {
          isLive.count += 1;
        } else {
          payload.count = 1;
          state.cartList.push(payload);
        }
      }
    },

    /**
     * 单个商品选中
     */
    // checkClick(state, payload) {
    //   state.cartList.find(item => {
    //     if (item.iid == payload.iid) {
    //       item.isChoice = payload.isChoice;
    //     }
    //   })
    // },


  },
  actions: {},
  modules: {}
})