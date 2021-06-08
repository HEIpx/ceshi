import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 创建vuex对象并向外暴露
export default new Vuex.Store({
    // 全局属性变量
    state: {
        msg: 0
    },
    // 全局同步方法, 调用方法,this.$store.commit("xxx")
    mutations: {
        changeDataMut(state, params) {
            state.msg = params
        }
    },
    // 异步方法 调用方法,this.$store.dispatch("xxx") 
    actions: {
        changeDataAct(context, params) {  //context是一个对象，从它里面把咱们需要的commit方法解构出来
            let { commit } = context
            commit('changeDataMut', params)
        }
    },
    // Vuex属性计算,在视图里面当变量使用
    getters: {
        doubleGet1(state){
            return state.msg*2
        },
        doubleGet2(state){
            return state.msg*3
        }
    },
    // 模块化注册
    modules: {
    }
})