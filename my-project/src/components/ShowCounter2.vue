<template>
    <div>
        <h1>这个页面是2号页面</h1>
        <br/>
        <input type="button" @click="increase" value="点击增加1" />
        {{points}}
        <br/>
        <router-link :to="{name:'ShowCounter1'}">计数页面1</router-link>
    </div>
</template>
<script>
import store from '@/vuex/store'
import {INCREASE} from '@/vuex/mutation_types'
export default {
  computed:{
      points(){
          return store.getters.get_points
      }
  },
  store,
  methods:{
      increase(){
          store.commit(INCREASE,store.getters.get_points+1)
      }
  }  
}
</script>
