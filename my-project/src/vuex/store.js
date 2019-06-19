import Vue from 'vue'
import Vuex from 'vuex'

//后续用到的counter状态
import counter from '@/vuex/modules/counter'
Vue.use(Vuex)
const debug = process.env.NODE_ENV !=='production'
export default new Vuex.Store({
    modules:{
        counter     //所有要管理的module都列在这里
    },
    strict:debug,
    middlewares:[]
})